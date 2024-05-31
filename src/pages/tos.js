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
              Terms of Use | Last Update - 21/07/24 20:17 GMT+2
            </label>
          </header>
            
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              1. Acceptance of Terms
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">By accessing and using the Mytho Discord bot “ONbot”, you agree to be bound by these Terms of Use "Terms". These Terms are a legal agreement between you and Reduce (the “Company”), the operator of Mytho. If you do not agree to these Terms, please do not use ONbot.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              2. Description of Service
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">ONbot is a safeguard bot designed to enhance the security and management of Discord servers. It offers various functionalities that help manage server interactions and protect against common security threats.</span>
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
                  <span className="p-color">ONbot is a safeguard bot designed to enhance the security and management of Discord servers. It offers various functionalities that help manage server interactions and protect against common security threats.</span>
                </li>
              </ul>
            </div>
          </section>


          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              3. Modifications to Terms
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">The Company reserves the right, at its discretion, to modify these Terms at any time. You are responsible for reviewing and becoming familiar with any such modifications. Use of the Services by you following such notification constitutes your acceptance of the terms and conditions of the Terms as modified.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              4. Use of the Service
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">You agree to use ONbot only for purposes that are permitted by these Terms and any applicable law, regulations, or generally accepted practices or guidelines in the relevant jurisdictions.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
              5. Your Registration Obligations
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">You may be required to register with Discord and be logged into your account to access ONbot. You are responsible for maintaining the confidentiality of your login information and are fully responsible for all activities that occur under your account.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb7" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb7">
              6. Privacy Policy
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">Information collected about you is subject to the terms of our Privacy Policy, which is hereby incorporated into and made part of these Terms. Please review our Privacy Policy to understand our practices in this area.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb8" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb8">
              7. Termination
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">The Company may terminate or suspend access to ONbot immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb9" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb9">
              8. Disclaimer of Warranties
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">ONbot is provided "as is" and "as available" without warranty of any kind. Your use of ONbot is at your sole risk. The Company expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb10" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb10">
              9. Limitation of Liability
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">To the fullest extent permitted by applicable law, in no event will the Company be liable for any indirect, special, incidental, punitive, exemplary, or consequential damages, whether or not the Company has been warned of the possibility of such damages.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb11" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb11">
              10. Governing Law
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">These Terms shall be governed by the laws of the jurisdiction in which the Company is based, without regard to its conflict of law provisions.</span>
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
