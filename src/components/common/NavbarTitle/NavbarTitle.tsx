"use client";

import { usePathname } from "next/navigation";

function NavbarTitle() {
  const pathname = usePathname();

  let title: string;

  if (pathname.startsWith("/dashboard/rooms")) title = "Xonalar";
 else  title  = "Asosiy"
  return (
    <header className="py-4 px-8 shadow-sm border-b">
      <h2 className="text-2xl font-bold">{title}</h2>
    </header>
  );
}

export default NavbarTitle;
