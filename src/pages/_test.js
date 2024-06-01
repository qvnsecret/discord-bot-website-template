import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Developers | ONbot</title>
        <meta
          name="description"
          content="Privacy | Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">

        <main className="showcase">
        <h1 className="showcase-header h-animated">ONbot</h1>
        <h2 className="showcase-header-text h-color">
          The only discord bot you need!
        </h2>
        <p className="showcase-para p-color">
          One of the awesome discord bot with tons of commands that will fill
          your needs in your discord server.
        </p>
            
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              📘Privacy Statement
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">At Mytho, operated by Reduce, we hold the utmost respect for your privacy. Only the Founder & CEO of the project has access to your personal information. Your privacy is of paramount importance to us. Please be assured that any personal information we collect is solely for educational purposes.

This statement makes clear who has access to personal information and the purpose behind collecting it, maintaining transparency and building trust.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
