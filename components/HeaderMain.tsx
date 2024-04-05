import React from "react";
import Header from "./header";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";

const HeaderMain = async () => {
  const session = await getServerSession(authOptions);
  const ifKhan=await prisma.user.findFirst({where:{email:'soomrush212@gmail.com'}})
  const user = await prisma.user.findFirst({
    where: { id: session?.user?.id },
  });
  return <Header session={session} user={user}  ifKhan={ifKhan} />;
};

export default HeaderMain;
