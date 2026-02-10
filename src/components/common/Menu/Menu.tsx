"use client";
import { Button } from "@/components/ui/button";
import { ChartLine, DoorOpen, Gamepad, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  text: string;
  href: string;
  icon: LucideIcon;
}

const menu: MenuItem[] = [
  {
    text: "Asosiy",
    href: "/dashboard",
    icon: ChartLine,
  },
  {
    text: "Xonalar",
    href: "/dashboard/rooms",
    icon: DoorOpen,
  },
];

function Menu() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {menu.map((menuItem) => {
          let Icon = menuItem.icon;
          return (
            <li key={menuItem.href}>
              <Link href={menuItem.href}>
                <Button
                  className="w-full justify-start"
                  variant={pathname == menuItem.href ? "default" : "outline"}
                >
                  <Icon />
                  <span>{menuItem.text}</span>
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
