import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactUs from "@/components/sections/ContactUs";
import Consultation from "@/components/sections/Consultation";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactUs />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
