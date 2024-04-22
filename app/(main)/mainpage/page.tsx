"use client";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelectedNavigation } from "next/navigation";
import { Card as UICard } from "@/components/ui/card";

const CardDetail = ({ card }) => {
  // ... 상세 정보 페이지로 이동하는 함수 ...
};

const Card = ({ card }) => (
  <UICard
    key=
    className="p-4 bg-white rounded-lg shadow-md"
    onClick={() => alert("상세 페이지로 이동")} // 상세 페이지로 이동하는 함수를 여기에 넣습니다.
    style={{ width: "275px", height: "350px" }}
  >
    <img
      alt="프로필 이미지"
      className="rounded-t-lg h-48 w-full object-cover"
    />
    <h2 className="text-xl font-semibold"></h2>
    <p></p>
    <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">
      이야기하기
    </button>
  </UICard>
);
const MainPage = () => {
  const [cards] = useState([
    {
      id: 1,
      title: "그림",
      text: "팀원에게 필요한 고민들 언제든 듣고 도와요. 사이드 프로젝트를 하다가 생기는 가벼운 고민, 수익화 등 언제든 환영해요.",
    },
    {
      id: 2,
      title: "그림",
      text: "팀원에게 필요한 고민들 언제든 듣고 도와요. 사이드 프로젝트를 하다가 생기는 가벼운 고민, 수익화 등 언제든 환영해요.",
    },
    {
      id: 3,
      title: "그림",
      text: "팀원에게 필요한 고민들 언제든 듣고 도와요. 사이드 프로젝트를 하다가 생기는 가벼운 고민, 수익화 등 언제든 환영해요.",
    },
    {
      id: 4,
      title: "그림",
      text: "팀원에게 필요한 고민들 언제든 듣고 도와요. 사이드 프로젝트를 하다가 생기는 가벼운 고민, 수익화 등 언제든 환영해요.",
    },
  ]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="color bg- text-4xl font-bold mb-8">
        PEER 사이드 프로젝트 친구상담
      </h1>
      <div className="w-full max-w-md space-y-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="p-4 bg-white rounded-lg shadow-md"
            onClick={() => navigateToCardDetail(card)}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p>{card.text}</p>
            </div>
          </Card>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
