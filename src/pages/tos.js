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
        <title>ToS | ONbot</title>
        <meta
          name="description"
          content="Terms of Services | Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Terms of Use
            </label>
          </header>
            
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              1. Acceptance of Terms
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">By accessing and using the Mytho Discord bot “Mytho”, you agree to be bound by these Terms of Use "Terms". These Terms are a legal agreement between you and Reduce (the “Company”), the operator of Mytho. If you do not agree to these Terms, please do not use Mytho.</span>
                </li>
              </ul>
            </div>
          </section>

                      <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              2. Description of Service
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">Mytho is a safeguard bot designed to enhance the security and management of Discord servers. It offers various functionalities that help manage server interactions and protect against common security threats.</span>
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
