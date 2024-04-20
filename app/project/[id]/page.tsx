import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

interface PostdetailsPageProps {
  params: {
    id: string;
  };
}

const ProjectDeialtPage = async ({ params: { id } }: PostdetailsPageProps) => {
  const project = await prisma.project.findUnique({
    where: { id: id },
  });
  return (
    <div className="w-full mt-[100px]">
      <div className="w-[83%] mx-auto">
        <div className="project-image p-6 h-[470px] w-[700px]">
          {project && (
            <Image
              src={project.image}
              alt="Project Image"
              width={500}
              height={400}
              className="h-full w-full"
            />
          )}
        </div>

        <div className="content w-[700px] p-6">
          <h1 className="text-2xl font-bold">{project?.title}</h1>
          {project && (
            <div
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: project?.body }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDeialtPage;
