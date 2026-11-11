import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBrands from "@/components/sections/TrustedBrands";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LiftCollection from "@/components/sections/LiftCollection";
import AboutEvio from "@/components/sections/AboutEvio";
import ExperienceCarousel from "@/components/sections/ExperienceCarousel";
import Technology from "@/components/sections/Technology";
import InstallationProcess from "@/components/sections/InstallationProcess";
import Gallery from "@/components/sections/Gallery";
import SafetyStandards from "@/components/sections/SafetyStandards";
import VideoExperience from "@/components/sections/VideoExperience";
import Projects from "@/components/sections/Projects";
import CustomerReviews from "@/components/sections/CustomerReviews";
import Consultation from "@/components/sections/Consultation";
import ContactUs from "@/components/sections/ContactUs";
import BlogInsights from "@/components/sections/BlogInsights";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBrands />
        <WhyChooseUs />
        <LiftCollection />
        <AboutEvio />
        <ExperienceCarousel />
        <Technology />
        <InstallationProcess />
        <Gallery />
        <SafetyStandards />
        <VideoExperience />
        <Projects />
        <CustomerReviews />
        <Consultation />
        <ContactUs />
        <BlogInsights />
      </main>
      <Footer />
    </>
  );
}
