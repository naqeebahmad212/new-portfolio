import AdminSidebar from "@/components/adminSideBar";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (session?.user.email !== "soomrush212@gmail.com") {
    redirect("/");
  }
  return (
    <div className="dashboardContainer flex">
      <div className="w-[17%]">
        <AdminSidebar />
      </div>
      <div className="dashboard w-[84%] px-3">
        <h1 className="text-2xl  text-center bg-primary text-white p-3 m-auto mt-5">
          Admin Dshboard
        </h1>
        {children}
      </div>
    </div>
  );
}
