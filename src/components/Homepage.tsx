
import localFont from "next/font/local";
import React from 'react'
import Image from "next/image";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });

const Homepage = () => {

    return (
        <div
          className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
        >
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <h1 className="_header_3cx2j_7 items-center">SNS APP</h1>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2">
                This page is{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  pages/index.tsx
                </code>
                .
              </li>
              <li>This site is made by Next.js and Express.</li>
            </ol>
    
            <div className="flex gap-2 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Register
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#fbacac] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
               Login
              </a>
            </div>
          </main>
    
          
          <footer className="row-start-3 flex gap-3 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
           
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
             
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              
            </a>
          </footer>
    
    
        </div>
  );
}

export default Homepage