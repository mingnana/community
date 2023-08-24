import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import GlobalStyle from "../styles/globalsStyle";
import Layout from "../_layout/index";
import Container from "../_view/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>이민아 클론코딩</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <GlobalStyle />
        <Layout>
          <Container />
        </Layout>
      </>
    </>
  );
}
