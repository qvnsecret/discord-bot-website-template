import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Documentation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
      <Navbar />
      <main className="documentation">
        <section className="intro-section">
          <h1>ONbot Documentation</h1>
          <p>Welcome to the ONbot documentation. This guide will help you understand how to set up and use ONbot efficiently.</p>
        </section>
        
        <section className="toc-section">
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
        </section>

        <section id="overview" className="content-section">
          <h2>Overview</h2>
          <p>This document provides a detailed explanation of how ONbot functions, including setup instructions, features, and troubleshooting tips. Images and detailed explanations are included to guide you through each step.</p>
        </section>

        <section id="getting-started" className="content-section">
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

        <section id="configuration" className="content-section">
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

        <section id="features" className="content-section">
          <h2>Features</h2>
          <h3>Feature 1</h3>
          <p>Description of Feature 1 and how to use it.</p>
          {/* Insert image or GIF of Feature 1 in action here */}
          
          <h3>Feature 2</h3>
          <p>Description of Feature 2 and how to use it.</p>
          {/* Insert image or GIF of Feature 2 in action here */}
        </section>

        <section id="usage" className="content-section">
          <h2>Usage</h2>
          <h3>Basic Commands</h3>
          <p>A list of basic commands and how to use them.</p>
          {/* Insert screenshot of command list here */}
          
          <h3>Advanced Commands</h3>
          <p>A list of advanced commands and how to use them.</p>
          {/* Insert screenshot of advanced command list here */}
        </section>

        <section id="troubleshooting" className="content-section">
          <h2>Troubleshooting</h2>
          <p>Common issues and how to resolve them.</p>
          {/* Insert image of common error messages here */}
        </section>

        <section id="faq" className="content-section">
          <h2>FAQ</h2>
          <p>Frequently asked questions about ONbot.</p>
          {/* Insert relevant images or diagrams here */}
        </section>

        <section id="support" className="content-section">
          <h2>Support</h2>
          <p>If you need further assistance, please contact our support team.</p>
          {/* Insert image of contact form or support information here */}
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
