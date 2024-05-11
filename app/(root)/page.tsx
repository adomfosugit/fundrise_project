import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <section>
    <div className="mt-12 max-w-4xl mx-auto ">
    <HeroSection />
   </div>
   <div>

    <About />
   </div>
    </section>
  
  );
}
