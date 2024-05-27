import "./styles.css";

export const metadata = {
  title: "Mads Codes",
  description: "A site about my hobbies and projects",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
