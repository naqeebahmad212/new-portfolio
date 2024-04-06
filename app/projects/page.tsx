import Projects from "@/components/Projects";
import React from "react";
import { useRef } from "react";
import { Project } from "@prisma/client";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PageWrapper from "@/components/PageWrapper";

const ProjectPage = async () => {
  const projects = await prisma.project.findMany({ orderBy: { id: "desc" } });

  return (
    <PageWrapper className="w-screen h-screen bg-[#041130]">
      <Projects projects={projects} />
    </PageWrapper>
  );
};

export default ProjectPage;
