import "@/styles/globals.scss";
import "@/styles/partials/_navbar.scss";
import "@/styles/partials/_showcase.scss";
import "@/styles/partials/_about.scss";
import "@/styles/partials/_joinUs.scss";
import "@/styles/partials/_footer.scss";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
