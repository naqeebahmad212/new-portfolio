import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Naqeeb | Dashboard",
  description: "Generated by create next app",
};

const DashboardPage = () => {
  return (
    <>
      <main className="mt-[100px]">
        <div className="dashbord-info flex items-center gap-3 lg:gap-5 xl:gap-8 justify-center my-5 text-white text-xl">
          <div className="h-[100px] md:h-[140px] lg:h-[200px] w-[100px]  md:w-[140px] lg:w-[200px] text-sm md:text-lg rounded-full flex items-center justify-center bg-purple-400">
            <p>12 Users</p>
          </div>
          <div className="h-[100px] md:h-[140px] lg:h-[200px] w-[100px]  md:w-[140px] lg:w-[200px] text-sm md:text-lg rounded-full flex items-center justify-center bg-blue-950">
            <p>2 Posts</p>
          </div>
          <div className="h-[100px] md:h-[140px] lg:h-[200px] w-[100px]  md:w-[140px] lg:w-[200px] text-sm md:text-lg rounded-full flex items-center justify-center bg-gray-800 shadow">
            <p>23 Views</p>
          </div>
        </div>
        <div className="topViewedPosts">
          <h3 className="text-center text-2xl p-3 bg-primary text-white">
            {" "}
            Top Viewed Posts
          </h3>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
