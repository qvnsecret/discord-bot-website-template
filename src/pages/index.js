import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ONbot</title>
        <meta
          name="description"
          content="Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      {/* Adding Image Link */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Link href="https://onbott.vercel.app/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/onbot.png" // Update with the correct path to your image
              alt="Descriptive Alt Text"
              width={500} // Specify the desired width
              height={300} // Specify the desired height
            />
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
}
