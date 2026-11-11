import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogInsights from "@/components/sections/BlogInsights";
import Consultation from "@/components/sections/Consultation";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogInsights />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
