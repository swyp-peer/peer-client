"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./result.module.css";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { api } from "@/lib/api";
import Link from "next/link";

const ReservePage = ({ params }: { params: { id: string } }) => {
  const infoRef = useRef<HTMLDivElement>(null);
  const [pm, setPm] = useState(1);
  const [designer, setDesigner] = useState(1);
  const [backend, setBackend] = useState(1);
  const [frontend, setFrontend] = useState(1);
  const [curPage, setCurPage] = useState(0);
  const [mobileNo, setMobileNo] = useState("");
  const [errorMobileNo, setErrorMobileNo] = useState("");
  const [info, setInfo] = useState(false);

  const handleClick = (action: number) => {
    if (action == 1 && curPage == 5) {
      handleSubmit();
      return;
    }

    let _page = curPage;
    if (action == -1 && curPage > 0) _page--;
    if (action == 1 && curPage < 5) _page++;

    setCurPage(_page);
    if (infoRef == null) return;
    infoRef.current!.style.marginLeft = -300 * _page + "px";
  };

  const handleSubmit = async () => {
    if (
      mobileNo.length != 0 &&
      mobileNo.length != 11 &&
      mobileNo.length != 13
    ) {
      setErrorMobileNo("핸드폰 번호를 정확하게 입력해주세요.");
      return;
    }

    // const result = await api.post(`/reserve/${params.id}`, {
    //   pm,
    //   designer,
    //   backend,
    //   frontend,
    //   info,
    //   mobileNo,
    // });

    // if (result.status == 200) {
    //   console.log("예약완료");
    // }
    const _page = curPage + 1;
    setCurPage(_page);
    if (infoRef == null) return;
    infoRef.current!.style.marginLeft = -300 * _page + "px";
  };
  return (
    <main className={`${styles.reserve} w-full h-full flex2 pt-16`}>
      <section>
        <Card className="border-none sm:border-solid">
          <CardHeader>
            <CardTitle>상담 신청</CardTitle>
            <hgroup className="max-w-[450px]">
              <h2>풍월량</h2>
              <p>
                팀원에게 말 못할 고민을 언제든지 털어 놓으세요. 사이드
                프로젝트를 하다가 생기는 가벼운 고민, 수익화 등등 무엇이든
                환영합니다.
              </p>
              <ul>
                <li>분야: 기획자</li>
                <li>유형: 스타트업</li>
              </ul>
            </hgroup>
          </CardHeader>
          <CardContent className="flex2 flex-col">
            <input type="number" value={pm} className="hidden" />
            <section className="w-[300px] overflow-hidden">
              <div className={styles.info} ref={infoRef}>
                <article className="space-y-5">
                  <h2>Q1. PM은 몇 명이신가요?</h2>
                  <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-5">
                      <button
                        onClick={() => setPm(1)}
                        className={`${pm == 1 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        1
                      </button>
                      <button
                        onClick={() => setPm(2)}
                        className={`${pm == 2 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        2
                      </button>
                      <button
                        onClick={() => setPm(3)}
                        className={`${pm == 3 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        3
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={() => setPm(4)}
                        className={`${pm == 4 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        4
                      </button>
                      <button
                        onClick={() => setPm(5)}
                        className={`${pm == 5 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        5
                      </button>
                      <button
                        onClick={() => setPm(6)}
                        className={`${pm == 6 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        6
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={() => setPm(7)}
                        className={`${pm == 7 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        7
                      </button>
                      <button
                        onClick={() => setPm(8)}
                        className={`${pm == 8 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        8
                      </button>
                      <button
                        onClick={() => setPm(0)}
                        className={`${pm == 0 ? "bg-pc-300" : "bg-slate-100"}`}
                      >
                        0
                      </button>
                    </div>
                  </div>
                </article>
                <article className="space-y-5">
                  <h2>Q2. 디자이너는 몇 명이신가요?</h2>
                  <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-5">
                      <button
                        onClick={() => setDesigner(1)}
                        className={`${
                          designer == 1 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        1
                      </button>
                      <button
                        onClick={() => setDesigner(2)}
                        className={`${
                          designer == 2 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        2
                      </button>
                      <button
                        onClick={() => setDesigner(3)}
                        className={`${
                          designer == 3 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        3
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={() => setDesigner(4)}
                        className={`${
                          designer == 4 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        4
                      </button>
                      <button
                        onClick={() => setDesigner(5)}
                        className={`${
                          designer == 5 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        5
                      </button>
                      <button
                        onClick={() => setDesigner(6)}
                        className={`${
                          designer == 6 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        6
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={() => setDesigner(7)}
                        className={`${
                          designer == 7 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        7
                      </button>
                      <button
                        onClick={() => setDesigner(8)}
                        className={`${
                          designer == 8 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        8
                      </button>
                      <button
                        onClick={() => setDesigner(0)}
                        className={`${
                          designer == 0 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        0
                      </button>
                    </div>
                  </div>
                </article>
                <article className="space-y-5">
                  <h2>Q3. 백엔드 개발자는 몇 명이신가요?</h2>
                  <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-5">
                      <button
                        onClick={() => setBackend(1)}
                        className={`${
                          backend == 1 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        1
                      </button>
                      <button
                        onClick={() => setBackend(2)}
                        className={`${
                          backend == 2 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        2
                      </button>
                      <button
                        onClick={() => setBackend(3)}
                        className={`${
                          backend == 3 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        3
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={() => setBackend(4)}
                        className={`${
                          backend == 4 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        4
                      </button>
                      <button
                        onClick={() => setBackend(5)}
                        className={`${
                          backend == 5 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        5
                      </button>
                      <button
                        onClick={() => setBackend(6)}
                        className={`${
                          backend == 6 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        6
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={() => setBackend(7)}
                        className={`${
                          backend == 7 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        7
                      </button>
                      <button
                        onClick={() => setBackend(8)}
                        className={`${
                          backend == 8 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        8
                      </button>
                      <button
                        onClick={() => setBackend(0)}
                        className={`${
                          backend == 0 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        0
                      </button>
                    </div>
                  </div>
                </article>
                <article className="space-y-5">
                  <h2>Q4. 프론트엔드 개발자는 몇 명이신가요?</h2>
                  <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-5">
                      <button
                        onClick={() => setFrontend(1)}
                        className={`${
                          frontend == 1 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        1
                      </button>
                      <button
                        onClick={() => setFrontend(2)}
                        className={`${
                          frontend == 2 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        2
                      </button>
                      <button
                        onClick={() => setFrontend(3)}
                        className={`${
                          frontend == 3 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        3
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={() => setFrontend(4)}
                        className={`${
                          frontend == 4 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        4
                      </button>
                      <button
                        onClick={() => setFrontend(5)}
                        className={`${
                          frontend == 5 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        5
                      </button>
                      <button
                        onClick={() => setFrontend(6)}
                        className={`${
                          frontend == 6 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        6
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={() => setFrontend(7)}
                        className={`${
                          frontend == 7 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        7
                      </button>
                      <button
                        onClick={() => setFrontend(8)}
                        className={`${
                          frontend == 8 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        8
                      </button>
                      <button
                        onClick={() => setFrontend(0)}
                        className={`${
                          frontend == 0 ? "bg-pc-300" : "bg-slate-100"
                        }`}
                      >
                        0
                      </button>
                    </div>
                  </div>
                </article>
                <article className="space-y-5 h-auto">
                  <h2>Q5. 어떤 점이 고민이신가요?</h2>
                  <Textarea className="h-52"></Textarea>
                </article>
                <article className="flex flex-col justify-evenly">
                  <div className="px-1">
                    <h2>Q6. 연락처를 적어주세요(선택사항)</h2>
                    <Input
                      type="tel"
                      placeholder="010-1234-1234"
                      className="mt-5"
                      value={mobileNo}
                      onChange={(e) => {
                        setMobileNo(e.target.value);
                        setErrorMobileNo("");
                      }}
                    />
                    <h3 className="text-destructive">{errorMobileNo}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <button id={styles.personal}>
                        <IoCheckmarkCircleOutline
                          className={`rounded-full text-3xl duration-200
                          hover:bg-green-500 hover:text-white
                           ${info && "bg-green-500 text-white"}`}
                          onClick={() => setInfo((cur) => !cur)}
                        />
                      </button>
                      <span className="ml-1 flex items-center">
                        개인정보수집 이용 동의서
                      </span>
                    </div>
                    <span className="cursor-pointer">보기</span>
                  </div>
                </article>
                <article className="flex2">
                  <hgroup>
                    <h2 className="text-center text-xl font-semibold">
                      상담 신청 완료
                    </h2>
                    <h3 className="text-center text-sm text-zinc-500 mt-5">
                      승인 여부는 나의 상담 페이지에서
                      <br /> 확인하실 수 있습니다.
                    </h3>
                    <h4 className="text-center text-sm text-zinc-500 mt-5">
                      <Link href="/mycounsels">
                        <u>나의 상담</u>
                      </Link>
                    </h4>
                  </hgroup>
                </article>
              </div>
              <div
                className={`flex w-full gap-5 mt-5 ${curPage == 6 && "hidden"}`}
              >
                <Button className="w-1/3" onClick={() => handleClick(-1)}>
                  이전
                </Button>
                <Button
                  className="w-2/3"
                  onClick={() => handleClick(1)}
                  disabled={curPage == 5 && info == false}
                >
                  {curPage == 5 ? "제출" : "다음"}
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ReservePage;
