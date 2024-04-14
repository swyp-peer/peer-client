import { RiSearchLine } from "react-icons/ri";
import { ProfileButton } from "./profile-button";
import { AlarmButton } from "./alarm-button";
import { Logo } from "../logo/logo";

export const TopNavbar = () => {
  return (
    <nav className="bg-slate-100 w-full py-3 h-14 sm:h-16 px-5 fixed shadow-lg flex items-center justify-between z-10">
      <Logo className="text-3xl sm:text-5xl text-pc-500 hover:text-pc-300 font-bold duration-300 cursor-default mb-1" />

      <section className="h-full rounded-full flex relative">
        <button className="absolute h-full ml-3">
          <RiSearchLine className="text-zinc-700 text-2xl" />
        </button>
        <input
          className="h-full w-48 sm:w-96 pl-10 rounded-full focus:outline-none focus:ring-2"
          alt="검색"
        />
      </section>
      <section className="flex2 gap-5">
        <AlarmButton />
        <div className="hidden lg:block">
          <ProfileButton />
        </div>
      </section>
    </nav>
  );
};
