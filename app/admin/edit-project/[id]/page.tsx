import NewProject from "@/components/NewProject";
import EditProjectComp from "@/components/editProject";
import { prisma } from "@/lib/prisma";
import React from "react";

interface EditPageProps {
  params: {
    id: string;
  };
}

const EditProject = async ({ params: { id } }: EditPageProps) => {
  const project = await prisma.project.findUnique({
    where: { id },
  });

  return (
    <div>
      <div className="">
        <EditProjectComp project={project} />
      </div>
    </div>
  );
};

export default EditProject;
