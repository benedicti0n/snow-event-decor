import Footer from "@/components/Footer/Footer";
import FormSection from "@/components/FormSection/FormSection";
import GallerySection from "@/components/Gallery/GallerySection";
import Landingpage from "@/components/LandingPage/Landingpage";
import Navbar from "@/components/Navbar/Navbar";
import SmallInfoSection from "@/components/SmallInfoSection/SmallInfoSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative">
      <Navbar />
      <Landingpage />
      <SmallInfoSection />
      <FormSection />
      <GallerySection />
      <Footer />
    </div>
  );
}
