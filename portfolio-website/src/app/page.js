import Image from "next/image";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#121212]">
      <HeroSection/>
    </main>
  );
}
