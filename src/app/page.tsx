import Landingpage from "@/components/LandingPage/Landingpage";
import Navbar from "@/components/Navbar/Navbar";
import SmallInfoSection from "@/components/SmallInfoSection/SmallInfoSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative">
      <Navbar />
      <Landingpage />
      <SmallInfoSection />
    </div>
  );
}
