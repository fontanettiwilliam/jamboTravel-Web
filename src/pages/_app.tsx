import type { AppProps } from "next/app";
import Image from "next/image";

import { globalStyles } from "../styles/global";

globalStyles();

import { Header } from "@/styles/pages/app";
import logo from "../assets/logo.svg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header>
        <Image
          src={logo.src}
          alt="jambo travel logo"
          width={logo.width}
          height={logo.height}
        />

        <div>
          <span className="active">Home</span>
          <span>Products</span>
          <span>About Us</span>
          <span>Blog</span>
          <button>Login</button>
        </div>
      </Header>
      <Component {...pageProps} />
    </div>
  );
}
