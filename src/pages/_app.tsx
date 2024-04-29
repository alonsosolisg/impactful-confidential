import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Black_Ops_One } from "next/font/google";
import LocalFont from "next/font/local";
import { Toaster } from "react-hot-toast";

const typewriter = LocalFont({
  src: "./fonts/typewriter.ttf",
  variable: "--typewriter",
  weight: "400",
});

const blackOps = Black_Ops_One({
  variable: "--blackops",
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${typewriter.variable} font-sans ${blackOps.variable} font-sans`}
    >
      {" "}
      <Toaster />
      <Component {...pageProps} />
    </div>
  );
}
