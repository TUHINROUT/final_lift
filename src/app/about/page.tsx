import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutEvio from "@/components/sections/AboutEvio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ExperienceCarousel from "@/components/sections/ExperienceCarousel";
import CustomerReviews from "@/components/sections/CustomerReviews";
import Consultation from "@/components/sections/Consultation";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutEvio />
        <WhyChooseUs />
        <ExperienceCarousel />
        <CustomerReviews />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
