import UserMsg from "@/components/UserMsg";
import { prisma } from "@/lib/prisma";
import React from "react";

const UserMessages = async () => {
  const userMessages = await prisma.message.findMany({});
  return (
    <div className="w-screen ">
      <UserMsg userMessages={userMessages} />
    </div>
  );
};

export default UserMessages;
