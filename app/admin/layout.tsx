import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session=await getServerSession(authOptions)
  if(session?.user.email !== 'soomrush212@gmail.com'){
    redirect('/')
  }
  return (
    <main>

      {children}
    </main>
        
     
  );
}
