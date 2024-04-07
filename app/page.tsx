import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import PageWrapper from "@/components/PageWrapper";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/services";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const projects = await prisma.project.findMany({ orderBy: { id: "desc" } });
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
          <Projects projects={projects.slice(0, 6)} />
        </section>

        <section className="sticky top-0 ]">
          <Contact />
        </section>
      </div>
    </PageWrapper>
  );
}
