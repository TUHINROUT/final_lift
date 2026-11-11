import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import Gallery from "@/components/sections/Gallery";
import CustomerReviews from "@/components/sections/CustomerReviews";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <Gallery />
        <CustomerReviews />
      </main>
      <Footer />
    </>
  );
}
