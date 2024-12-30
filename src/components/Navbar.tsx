import Link from 'next/link';
import React from 'react'
import { useAuth } from '@/src/context/auth'; // auth.tsxのhooksを使う

export const Navbar = () => {
    const { user, logout } = useAuth();
    console.log(user);

  return (
    <header className="bg-gray-700 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="font-semibold text-xl">
            <Link href="/" className='text-2xl font-medium'>SNS APP</Link>
            </h1>
            <nav>
            <ul className="flex space-x-4">
                {
                user ? (  //JSXのグループ化 JSX:HTML構文をJSに変換 createElement()を使って変換される
                    // HTML構文中に JS JSの変数屋敷を埋め込める {}で囲む
                    // ユーザーがいる場合   
                    // <>Reactのフラグメント（React.Fragment）を簡略化したもの
                    <>
                    <Link
                        href={`/profile/${user.id}`}
                        className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                        >
                        プロフィール
                    </Link>
                    <button onClick={logout} className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium">
                        ログアウト
                    </button>
                    </>
                ) : (
                    <>
                    <Link
                        href="/login"
                        className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                        >
                        ログイン
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                        >
                        サインアップ
                    </Link>
                    </>
                )}
            </ul>
            </nav>
        </div>
    </header>
  );
}

export default Navbar