"use server";

import { prisma } from "@/lib/prisma";
import cloudinary from "@/utils/cloudinary";
import { sendEmail } from "./sendEmail";

// adding new project
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



// receiving user message

export const AddUserMessage=async(data:FormData)=>{

  const name=data.get('name')?.toString();
  const email=data.get('email')?.toString();
  const message=data.get('message')?.toString();

  if (!name || !email || !message) throw new Error('Fill all the field and try')

  const newMessage=await prisma.message.create({
    data:{name , email , message,
      

    }
  })
 
  const options={
    subject:'Re: Inquiry/Project Update',
    name:newMessage.name,
    email:newMessage.email,
    message:`Dear ${newMessage.name},  \n
    Thank you for reaching out! We appreciate your message.We will get to you as soon as we are available.\n
     In the meantime, if you have any urgent matters, please feel free to contact via Whatsapp with +923449092443.\n for immediate assistance.\n
    Thank you for your understanding.
    \n\n\n
    Best regards.`
  }
  if(newMessage){
    sendEmail(options)
  }

}