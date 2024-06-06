import "./styles.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Mads Codes",
  description: "A site about my hobbies and projects",
};

function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
