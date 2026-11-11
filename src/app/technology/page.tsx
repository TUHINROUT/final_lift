import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Technology from "@/components/sections/Technology";
import InstallationProcess from "@/components/sections/InstallationProcess";
import Gallery from "@/components/sections/Gallery";
import VideoExperience from "@/components/sections/VideoExperience";

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main>
        <Technology />
        <InstallationProcess />
        <Gallery />
        <VideoExperience />
      </main>
      <Footer />
    </>
  );
}
