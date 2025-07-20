import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
// make sure path is correct

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton /> {/* Always visible on all pages */}
    </>
  );
}
