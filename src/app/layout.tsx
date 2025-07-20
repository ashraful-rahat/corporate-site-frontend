import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
