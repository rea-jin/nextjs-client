import Navbar from "@/src/components/Navbar";
import { AuthProvider } from "@/src/context/auth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// アプリ全体で適応される

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {/* ここから下がAuthProviderのchildrenになる
      auth.tsxで定義したvalueの中身を使える */}
      <div>
        <Navbar />
        <Component {...pageProps} />;
      </div>
    </AuthProvider>
  );
}
