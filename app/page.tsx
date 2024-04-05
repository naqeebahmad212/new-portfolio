import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import PageWrapper from "@/components/PageWrapper";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full overflow-hidden">
        <section className="sticky top-0 ">
          <HeroSection />
        </section>
        <section className="sticky top-0 ]  bg-[#041130]">
          <Services />
        </section>
        <section className="sticky top-0 ]">
          <Skills />
        </section>
        <section className="sticky top-0 ]">
          <Projects />
        </section>

        <section className="sticky top-0 ]">
          <Contact />
        </section>
      </div>
    </PageWrapper>
  );
}
