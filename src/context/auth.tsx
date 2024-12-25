// usecontextというreactのhooksをつかう
// アプリ全体で使いたい値
// 状態管理にはreduxもあるが、今回はreact.hooksのusecontextをつかう

import React , { useContext, useEffect } from 'react'
import apiClient from '../lib/apiClient';

interface AuthContextType{
    login: (token: string) => void; // 何も返さないのでvoid
    logout: ()=>void;
}

// Reactのコンポーネントツリー内でレンダリングできるすべてのものを意味します。
// たとえば、文字列、数字、React要素、配列、nullなどが含まれます。
// childrenの型としてReactNodeを使うのは一般的
interface AuthProviderProps{
    children: ReactNode;
}

const AuthContext = React.createContext<AuthContextType>({
    login: ()=> {},
    logout: ()=>{}
});

// カスタムhooks
export const useAuth = ()=>{
    return useContext(AuthContext);
}

// middleware
export const AuthProvider = ({ children }: AuthProviderProps)=>{
    
    useEffect(()=>{
        const token = localStorage.getItem("auth_token");
        // []を渡すと、そのuseEffectは初回のレンダリング時に1回だけ実行される
        // コンポーネントがマウントされるとき
        // もし依存配列に値を入れると、その値が変化するたびにuseEffectが実行される
        apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
    }, []);

    // うえでlogin呼び出した時ローカルストレージにトークンセット
    const login = async (token : string)=>{
        localStorage.setItem("auth_token",token)
    };

    const logout = () => {
        localStorage.removeItem("auth_token");
    };

    const value = {
        login,
        logout,
    };

    // このコンポーネントでvalueが使える
    // childrenをラップしているので、アプリ全体でこのAuthProviderが動く
    // useEffectもアプリリロード時などに毎回動く
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};