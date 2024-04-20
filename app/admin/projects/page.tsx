"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOption";
import { prisma } from "@/lib/prisma";
import DataGridComp from "@/components/dataGridComp";

const AllProjects = async () => {
  "use server";
  const session = await getServerSession(authOptions);
  const projects = await prisma.project.findMany();

  return (
    <div className=" ">
      <DataGridComp projects={projects} />
    </div>
  );
};

export default AllProjects;
