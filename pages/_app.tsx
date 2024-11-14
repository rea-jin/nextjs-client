import Navbar from "@/src/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// アプリ全体で適応される

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Navbar />
    <Component {...pageProps} />;
    </div>
  );
}
