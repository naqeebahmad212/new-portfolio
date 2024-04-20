"use client";
import { deleteProject } from "@/utils/db";
import { Project } from "@prisma/client";
import { IconHttpDelete } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState, useTransition } from "react";

interface GridProps {
  projects: Project[];
}

const DataGridComp = ({ projects }: GridProps) => {
  const [pending, startTransition] = useTransition();
  const [projectId, setProjectId] = useState("");

  let i = 1;
  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-gray-300 font-bold">
              <th>#</th>
              <th>Tile</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {projects.map((project) => (
              <tr key={project.id} className="text-gray-300">
                <th>{i++}</th>
                <td>{project.title}</td>
                <td>
                  <div
                    className="h-[40px] w-[70px] bg-cover"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                </td>
                <td className="flex items-center justify-start mt-3">
                  <button
                    className="mr-4 text-warning p-2 bg-red-400 rounded-full"
                    onClick={() => {
                      setProjectId(project.id);
                      startTransition(async () => {
                        await deleteProject(project.id);
                      });
                    }}
                  >
                    <div className="flex items-center justify-center">
                      {pending && projectId == project.id ? (
                        <span className="loading loading-spinner" />
                      ) : (
                        "Delete"
                      )}
                    </div>
                  </button>
                  <Link
                    href={"/admin/edit-project/" + project.id}
                    className="link"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGridComp;
