import { Analytics } from "@vercel/analytics/react";

import "./styles.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { nunitoSans } from "@/constants";

export const metadata = {
  title: "Mads Codes",
  description: "A site about my hobbies and projects",
};

function RootLayout({ children }) {
  return (
    <html lang="en" className={`
      antialiased
      ${nunitoSans.variable}
    `}>
      <body className={`
        bg-background
        text-text
      `}>
        <div className={`isolate`}>
          <Header />

          <main className={`
            grid
            gap-y-32
          `}>{children}</main>

          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
