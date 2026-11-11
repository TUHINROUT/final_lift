import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiftCollection from "@/components/sections/LiftCollection";
import LiftModels from "@/components/sections/LiftModels";
import SafetyStandards from "@/components/sections/SafetyStandards";
import Consultation from "@/components/sections/Consultation";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <LiftCollection />
        <LiftModels />
        <SafetyStandards />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
