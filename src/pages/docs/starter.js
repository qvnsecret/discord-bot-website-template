import Head from "next/head";
import { motion } from "framer-motion";

export default function Documentation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: "#fff", color: "#000", minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Head>
        <title>Documentation | ONbot</title>
        <meta
          name="description"
          content="Documentation for the ONbot discord bot created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="documentation">
        <aside className="toc-section">
          <div className="toc-box">
            <h2>Table of Contents</h2>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#getting-started">Getting Started</a></li>
              <li><a href="#configuration">Configuration</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#usage">Usage</a></li>
              <li><a href="#troubleshooting">Troubleshooting</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
        </aside>
        <div className="separator"></div>
        <section className="content-section">
          <section id="overview" className="section">
            <h2>Overview</h2>
            <p>This document provides a detailed explanation of how ONbot functions, including setup instructions, features, and troubleshooting tips. Images and detailed explanations are included to guide you through each step.</p>
          </section>

          <section id="getting-started" className="section">
            <h2>Getting Started</h2>
            <h3>Prerequisites</h3>
            <ul>
              <li>Node.js installed</li>
              <li>A Discord account</li>
              <li>Access to the Discord Developer Portal</li>
            </ul>
            <h3>Installation</h3>
            <p>To install ONbot, follow these steps:</p>
            <ol>
              <li>Clone the repository</li>
              <li>Install the required dependencies</li>
              <li>Start the bot</li>
            </ol>
            {/* Insert image of terminal with commands here */}
          </section>

          <section id="configuration" className="section">
            <h2>Configuration</h2>
            <h3>Setting up API Keys</h3>
            <p>To configure API keys, follow these steps:</p>
            <ol>
              <li>Navigate to the settings page</li>
              <li>Enter your API key in the designated field</li>
              <li>Save your changes</li>
            </ol>
            {/* Insert image of settings page here */}
            
            <h3>Configuring Settings</h3>
            <p>You can customize the bot settings to suit your needs. This section explains how to modify the settings for optimal performance.</p>
            {/* Insert image of configuration panel here */}
          </section>

          <section id="features" className="section">
            <h2>Features</h2>
            <h3>Feature 1</h3>
            <p>Description of Feature 1 and how to use it.</p>
            {/* Insert image or GIF of Feature 1 in action here */}
            
            <h3>Feature 2</h3>
            <p>Description of Feature 2 and how to use it.</p>
            {/* Insert image or GIF of Feature 2 in action here */}
          </section>

          <section id="usage" className="section">
            <h2>Usage</h2>
            <h3>Basic Commands</h3>
            <p>A list of basic commands and how to use them.</p>
            {/* Insert screenshot of command list here */}
            
            <h3>Advanced Commands</h3>
            <p>A list of advanced commands and how to use them.</p>
            {/* Insert screenshot of advanced command list here */}
          </section>

          <section id="troubleshooting" className="section">
            <h2>Troubleshooting</h2>
            <p>Common issues and how to resolve them.</p>
            {/* Insert image of common error messages here */}
          </section>

          <section id="faq" className="section">
            <h2>FAQ</h2>
            <p>Frequently asked questions about ONbot.</p>
            {/* Insert relevant images or diagrams here */}
          </section>

          <section id="support" className="section">
            <h2>Support</h2>
            <p>If you need further assistance, please contact our support team.</p>
            {/* Insert image of contact form or support information here */}
          </section>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

const Header = () => (
  <header style={{ backgroundColor: "#fff", color: "#000", padding: "20px", textAlign: "center" }}>
    <h1>ONbot Documentation</h1>
  </header>
);

const Footer = () => (
  <footer style={{ backgroundColor: "#fff", color: "#000", padding: "10px", textAlign: "center", marginTop: "auto" }}>
    <p>&copy; 2024 ONbot. All rights reserved.</p>
  </footer>
);
