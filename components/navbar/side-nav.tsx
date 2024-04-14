"use client";
import { Logo } from "../logo/logo";
import { Menus } from "@/constants/reviews";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideNavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-slate-100 hidden lg:flex h-full w-36 mt-16 pt-10 fixed z-20 flex-col items-center gap-10 shadow-lg">
      {Menus.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            href={item.key}
            key={item.key}
            className={`hover:bg-slate-200/70 w-full py-1 rounded-xl pl-2 flex items-center group duration-300`}
          >
            <div
              className={`w-1.5 h-4/5  rounded-full duration-500 ${
                pathname === item.key ? "bg-pc-300" : "group-hover:bg-zinc-400"
              }`}
            />
            <div className="text-zinc-700 ml-2 mb-0.5 flex items-center text-lg font-medium">
              <Icon className={`${pathname === item.key && "text-pc-500"}`} />
              <span className="ml-2 ">{item.name}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
