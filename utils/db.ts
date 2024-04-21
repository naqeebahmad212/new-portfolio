"use server";

import { prisma } from "@/lib/prisma";
import cloudinary from "@/utils/cloudinary";
import { sendEmail } from "./sendEmail";
import { revalidatePath } from "next/cache";
import { getErrorMessage } from "./getErrorMessage";



// adding new project
export const submitHandler = async (data: FormData) : Promise<Object>  => {
 try {
  const title = data.get("title")?.toString();
  const snippet = data.get("snippet")?.toString();
  const body = data.get("body")?.toString();
  const image = data.get("image") as string;

  if (!title || !snippet || !body || !image) {

    throw new Error("All fields required");
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

  return{
    success : 'Added Successfully'
  }
  
 } catch (error:unknown) {
  return{
    error:getErrorMessage(error)
  }
 }
};



// receiving user message

export const AddUserMessage=async(data:FormData) : Promise<Object> =>{
try {

  
  const name=data.get('name')?.toString();
  const email=data.get('email')?.toString();
  const message=data.get('message')?.toString();

  if (!name || !email || !message) throw new Error('Fill all the fields and try')

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
    await sendEmail(options)
  
  }

  return{
    success:'Message sent Successfully , check email.'
  }
  
} catch (error:unknown) {
return{
  error:getErrorMessage(error)
}
  
}

}



export const deleteProject= async (id:string)=>{
  const project=await prisma.project.findUnique({where:{id}})

  if (project){
    await cloudinary.v2.uploader.destroy(project.public_id)
  }
  await prisma.project.delete({
    where:{id}
  })
  revalidatePath('/admin/projects')
}



export const updateHandler=async(data:FormData)=>{
  const title = data.get("title")?.toString();
  const snippet = data.get("snippet")?.toString();
  const body = data.get("body")?.toString();
  const image = data.get("image") as string;
  const projectId=data.get('projectId')?.toString()



  if (!title || !snippet || !body) {
    throw new Error("Pleas fille all the fields");
  }

  const projectToUpdate=await prisma.project.findUnique({
    where:{id:projectId}
  })
 

  if( !projectToUpdate) throw new Error('No Project Found');

  
  
  if(image !=='' && image !== undefined ){
   
    const result = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio",
    });

    await cloudinary.v2.uploader.destroy(projectToUpdate?.public_id)


    const project = await prisma.project.update({
      where:{id:projectId},
      data: {
        title,
        snippet,
        body,
        image: result.secure_url,
        public_id: result.public_id,
      },
    });
  }else{
   

    const project = await prisma.project.update({
      where:{id:projectId},
      data: {
        title,
        snippet,
        body,
      },
    });

  }

 

}