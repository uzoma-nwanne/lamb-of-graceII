
import Hero from "@/components/hero";
import About from "@/components/about";
import Destinations from "@/components/destinations";
import Services from "@/components/services";
import Subscribe from "@/components/subscribe";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Destinations/>
      <Partners/>
      <About/>
      <Services/>
      <Subscribe/>
    </div>
  );
}
