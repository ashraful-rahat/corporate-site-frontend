import ReduxProvider from "@/providers/ReduxProvider";
import "./globals.css";
import {   Poppins } from "next/font/google";



  const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <ReduxProvider>
          
        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
