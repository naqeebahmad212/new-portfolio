"use client";
import React from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import PersonIcon from "@mui/icons-material/Person";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import FeedbackIcon from "@mui/icons-material/Feedback";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

function MobileNav() {
  const links = [
    {
      route: "/",
      label: "Home",
      icon: <HomeIcon className=" relative" />,
    },
    // {
    //   route: "/about",
    //   label: "About",
    //   icon: <PersonIcon className=" relative" />,
    // },
    {
      route: "/services",
      label: "Services",
      icon: <WorkspacesIcon className=" relative" />,
    },
    {
      route: "/projects",
      label: "Projects",
      icon: <SpaceDashboardIcon className=" relative" />,
    },
    {
      route: "/feedbacks",
      label: "Feedback",
      icon: <FeedbackIcon className=" relative" />,
    },
    {
      route: "/contact",
      label: "Cantact",
      icon: <ContactMailIcon className=" relative" />,
    },
  ];

  const path = usePathname();

  return (
    <div className="sideNav  fixed lg:hidden flex justify-center items-center bottom-0 w-screen shadow-2xl right-0 rounded-t-2xl bg-gray-400  z-[99999]">
      <ul className="flex  gap-8 p-5">
        {links.map((link) => {
          const isActive = path === link.route;
          return (
            <li key={link.route} className="w-full">
              <Link
                href={link.route}
                key={link.route}
                className="relative cursor-pointer"
              >
                <HoverCard>
                  <HoverCardTrigger
                    className={cn("cursor-pointer", {
                      "text-blue-500": isActive,
                    })}
                  >
                    {link.icon}
                  </HoverCardTrigger>
                  <HoverCardContent
                    className={`absolute -top-6 right-[15px] rounded-none w-20 flex justify-center p-0 border-none bg-slate-100 text-gray-700 text-sm`}
                  >
                    {" "}
                    {link.label}
                  </HoverCardContent>
                </HoverCard>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileNav;
