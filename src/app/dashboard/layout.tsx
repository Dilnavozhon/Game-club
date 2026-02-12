
import Navbar from "@/components/layouts/Navbar/Navbar";
import Sidebar from "@/components/layouts/Sidebar/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div className="w-full h-full flex">
   <Sidebar/>
    <div className="grow flex flex-col">
        <Navbar/>
      <main className="grow overflow-y-auto py-4 px-4">{children}</main>
    </div>
  </div>;
}
