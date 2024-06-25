import { Analytics } from "@vercel/analytics/react";

import "./styles.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mads Codes",
  description: "A site about my hobbies and projects",
};

function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body>
        <div className="isolate">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
