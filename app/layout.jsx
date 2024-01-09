import "./styles/globals.scss";

export const metadata = {
  title: "next.js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Menu</header>
        {children}
      </body>
    </html>
  );
}