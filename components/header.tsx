"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Link from "next/link";
import {
  IconArrowRightToArc,
  IconBrandFiverr,
  IconBrandUpwork,
  IconTruckLoading,
} from "@tabler/icons-react";
import { User } from "@prisma/client";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

interface UserProps {
  user: User | null;
  session: Session | null;
  ifKhan: User | null;
}

const Header = ({ user, session, ifKhan }: UserProps) => {
  const khan = session?.user.email == "soomrush212@gmail.com";
  return (
    <AlertDialog>
      <header className="fixed top-0 shadow-lg z-[9] w-full bg-[#041130] ">
        <nav className="w-full relative p-4 flex items-center justify-between px-10 bg-transparent z-30 ">
          <div className="brand text-2xl font-bold text-white">
            <Link href={"/"}>
              Port <span className="text-blue-500">Folio</span>
            </Link>
          </div>

          {khan && (
            <div>
              <Link href={"/add-new-project"} className="link text-blue-500">
                Add Project
              </Link>
            </div>
          )}
          <div className="flex gap-5 items-center">
            {ifKhan && !session && (
              <button
                onClick={async () => await signIn()}
                data-label="Register"
                className="rainbow-hover"
              >
                <span className="sp">SignIn</span>
              </button>

              // <button className="text-gray-300 btn btn-ghost"></button>
            )}
            {ifKhan && session && (
              <button
                onClick={async () => await signOut({ callbackUrl: "/" })}
                data-label="Register"
                className="rainbow-hover"
              >
                <span className="sp">SignOut</span>
              </button>
              //  <button className="text-gray-300 btn btn-ghost" >SignOut</button>
            )}
            <AlertDialogTrigger>
              <button className="button">Hire Me</button>
            </AlertDialogTrigger>
          </div>
        </nav>
      </header>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-gray-300">
            Which Marketpalce would you prefer?
          </AlertDialogTitle>
          <AlertDialogDescription className="flex gap-5 py-2 text-green-500">
            <Link href={"https://www.fiverr.com/s/Geo9Kd"} target="_blank">
              <IconBrandFiverr className="hover:scale-110 transition-all duration-300" />{" "}
              Fiverr
            </Link>
            <Link
              href={"https://www.upwork.com/freelancers/~01d63dc870a67d5e23"}
              target="_blank"
            >
              <IconBrandUpwork className="hover:scale-110 transition-all duration-300" />{" "}
              Upwork
            </Link>
            <p className="self-end text-center text-gray-300">
              <IconTruckLoading /> More coming soon...
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-gray-300">Back</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Header;
