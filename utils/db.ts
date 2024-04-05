"use server";

import { prisma } from "@/lib/prisma";
import cloudinary from "@/utils/cloudinary";
export const submitHandler = async (data: FormData) => {
  const title = data.get("title")?.toString();
  const snippet = data.get("snippet")?.toString();
  const body = data.get("body")?.toString();
  const image = data.get("image") as string;

  if (!title || !snippet || !body || !image) {
    throw new Error("Pleas fille all the fields");
  }

  const result = await cloudinary.v2.uploader.upload(image, {
    folder: "portfolio",
  });
  const project = await prisma.project.create({
    data: {
      title,
      snippet,
      body,
      image: result.secure_url,
      public_id: result.public_id,
    },
  });
};
