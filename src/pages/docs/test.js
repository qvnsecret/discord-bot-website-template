import React from 'react';
import Head from 'next/head';

const Documentation = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="assets/images/favicon.png" />
        <title>Documentation | Your ThemeForest item Name</title>
        <meta
          name="description"
          content="Your ThemeForest item Name and description"
        />
        <meta name="author" content="harnishdesign.net" />
        {/* Stylesheet */}
        {/* Bootstrap */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        {/* Font Awesome Icon */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/font-awesome/css/all.min.css"
        />
        {/* Magnific Popup */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/magnific-popup/magnific-popup.min.css"
        />
        {/* Highlight Syntax */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/highlight.js/styles/github.css"
        />
        {/* Custom Stylesheet */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/stylesheet.css"
        />
      </Head>

      <body className="box" data-spy="scroll" data-target=".idocs-navigation" data-offset="125">
        {/* Preloader */}
        <div className="preloader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* Preloader End */}

        {/* Document Wrapper */}
        <div id="main-wrapper">
          {/* Header */}
          <header id="header" className="sticky-top">
            {/* Navbar */}
            <nav className="primary-menu navbar navbar-expand-lg navbar-dropdown-dark">
              <div className="container-fluid">
                {/* Sidebar Toggler */}
                <button
                  id="sidebarCollapse"
                  className="navbar-toggler d-block d-md-none"
                  type="button"
                >
                  <span></span>
                  <span className="w-75"></span>
                  <span className="w-50"></span>
                </button>

                {/* Logo */}
                <a className="logo ml-md-3" href="index.html" title="iDocs Template">
                  <img src="assets/images/logo.png" alt="iDocs Template" />
                </a>
                <span className="text-2 ml-2">v1.0</span>
                {/* Logo End */}

                {/* Navbar Toggler */}
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#header-nav">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <div id="header-nav" className="collapse navbar-collapse justify-content-end">
                  <ul className="navbar-nav">
                    <li className="dropdown">
                      <a className="dropdown-toggle" href="#">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Dropdown Action
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="index.html">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="feature-header-dark.html">
                                Another Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="feature-header-primary.html">
                                Something Else Here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-2.html">
                                Another Link
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something Else Here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a target="_blank" href="https://themeforest.net/user/harnishdesign/portfolio?ref=HarnishDesign">
                        Other Template
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          {/* Header End */}
        </div>
      </body>
    </>
  );
}

export default Documentation;
