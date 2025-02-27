import Landingpage from "@/components/LandingPage/Landingpage";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative">
      <Navbar />
      <Landingpage />
    </div>
  );
}
