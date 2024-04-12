"use client";
import { Logo } from "@/components/logo/logo";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Reviews } from "@/constants/reviews";
import { easeIn, motion } from "framer-motion";
import "./_page.css";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";

const MainPage = () => {
  // const auth = useAuth();
  // const router = useRouter();

  // if (auth.isLoggedIn) {
  //   router.push('/mentors');
  //   return;
  // }

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
      viewport: { once: true },
    },
    inView: {
      opacity: 1,
      y: 0,
      ease: easeIn,
      viewport: { once: true },
    },
    buttonInitial: {
      opacity: 0,
      x: -200,
      viewport: { once: true },
    },
    buttonInView: {
      opacity: 1,
      x: 0,
      viewport: { once: true },
    },
  };

  return (
    <main className="w-full pt-28 flex items-center flex-col gap-40">
      <motion.div
        variants={variants}
        whileInView="inView"
        initial="initial"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Logo
          className={
            "mt-14 text-8xl font-bold text-pc-500 underline underline-offset-[15px] decoration-4"
          }
        />
      </motion.div>
      <hgroup className="space-y-5">
        <motion.h1
          className="text-zinc-700 text-center text-3xl sm:text-6xl sm:text-left font-semibold tracking-wider"
          variants={variants}
          whileInView="inView"
          initial="initial"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          사이드 프로젝트 친구상담
        </motion.h1>
        <motion.p
          className="text-zinc-500 text-center text-xl sm:text-left sm:text-3xl font-semibold"
          variants={variants}
          whileInView="inView"
          initial="initial"
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          여러분들의 사이드 프로젝트 고충을 들어드립니다.
        </motion.p>
      </hgroup>

      <motion.section
        className="w-full flex2 sm:block sm:w-80 relative group"
        variants={variants}
        initial="buttonInitial"
        whileInView="buttonInView"
        transition={{ duration: 0.5, delay: 0.7, ease: "circOut" }}
        viewport={{ once: true }}
      >
        <Link href={"/sign-up"}>
          <div className="static flex2 sm:block sm:absolute h-16 w-64 sm:w-16 rounded-full bg-pc-500 peer group-hover:w-64 left-0 group-hover:left-4 duration-500 ease-[cubic-bezier(0.65,0,.076,1);] shadow-lg">
            <RiArrowRightSLine className="text-white sm:text-zinc-700 group-hover:text-white sm:absolute h-16 w-16 duration-300" />
            <button className="text-white text-2xl font-bold mr-5 sm:hidden">
              바로 시작하기
            </button>
          </div>
          <button className=" text-zinc-700 group-hover:text-white hidden sm:block w-full h-16 text-center text-2xl relative duration-300 font-bold tracking-wider">
            바로 시작하기
          </button>
        </Link>
      </motion.section>

      <section className="mt-20 w-[95%] overflow-hidden">
        <div className="w-[290rem] space-x-20">
          {Reviews.map((item, idx) => {
            return (
              <Card className="inline-block box h-80 overflow-hidden" key={idx}>
                <CardHeader className="flex flex-row items-center gap-5">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <hgroup className="flex flex-col">
                    <span>{item.name}</span>
                    <span>
                      {item.job}&nbsp;&nbsp;&nbsp;
                      {item.experience}
                    </span>
                  </hgroup>
                  <Separator className="my-2" />
                  <p className="text-zinc-600">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <Separator className="ml-[10%] w-4/5 my-10" />
      <section className="w-full px-[10%] sm:px-[20%] xl:px-[25%]">
        <motion.hgroup
          className="text-zinc-700 text-2xl sm:text-4xl font-semibold mb-20 leading-loose"
          variants={variants}
          initial="initial"
          whileInView="inView"
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>
            참여자들의 <span className="text-white bg-pc-300">익명성</span>은
            완전히 보장됩니다.
            <br />
            대충 우리 서비스 특징1
            <br />
            멘토의 재능 기부의 일환으로, 모든 상담은{" "}
            <span className="text-white bg-pc-300">무료로</span> 진행됩니다!
            <br />
            작은 설명 등등
          </h2>
        </motion.hgroup>
      </section>
    </main>
  );
};

export default MainPage;
