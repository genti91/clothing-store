/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
