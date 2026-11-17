import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { OpenSource } from "@/components/OpenSource";
import { Splash } from "@/components/Splash";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Splash />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Education />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
