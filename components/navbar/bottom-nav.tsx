"use client";
import { BottomMenus, Menus } from "@/constants/reviews";
import { ProfileButton } from "./profile-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-slate-100 flex lg:hidden fixed w-full h-14 bottom-0 items-center justify-evenly">
      {BottomMenus.map((item) => {
        const Icon = item.icon;

        return (
          <Link href={item.key} key={item.key} className="flex2 flex-col">
            <Icon
              className={` text-2xl ${
                pathname === item.key ? "text-pc-500" : "text-zinc-700"
              }`}
            />
            <span className="text-zinc-600 text-[10px]">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavbar;
