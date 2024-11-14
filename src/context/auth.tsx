// usecontextというreactのhooksをつかう
// アプリ全体で使いたい値
// 状態管理にはreduxもあるが、今回はreact.hooksのusecontextをつかう

import React , { useContext } from 'react'

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

export const AuthProvider = ({ children }: AuthProviderProps)=>{
    // うえでlogin呼び出した時
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
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};