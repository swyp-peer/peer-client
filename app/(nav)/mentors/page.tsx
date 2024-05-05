"use client"; //ds
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button"; //sdf
import { useRouter } from "next/router";
import { Card as UICard } from "@/components/ui/card";
import React, { useState } from "react";
import styles from "../mentors/mainpage.module.css";

const Card = ({ card, onCardSelect, isCenter }) => (
  <UICard
    className={`p-4 bg-white rounded-lg shadow-md transform transition-transform ${
      isCenter ? "scale-100 cursor-default" : "scale-90 cursor-pointer"
    }`}
    onClick={onCardSelect}
    style={{ width: "275px", height: "350px", borderRadius: "15%" }}
  >
    <img
      src={card.image}
      alt="프로필 이미지"
      className="rounded-t-lg h-48 w-full object-cover"
    />
    <p>{card.title}</p>
    <p>{card.text}</p>
  </UICard>
);
const MainPage = () => {
  const [cards] = useState([
    {
      id: 1,
      title: "프로필 이름1",
      text: "짧은 소개",
      detail: "자세한 정보1",
      image: "path_to_image_1.jpg",
      uploadedTime: "2023-04-17 14:00",
    },
    {
      id: 2,
      title: "프로필 이름2",
      text: "짧은 소개",
      detail: "자세한 정보2",
      image: "path_to_image_2.jpg",
      uploadedTime: "2023-04-18 09:30",
    },
    {
      id: 3,
      title: "프로필 이름3",
      text: "짧은 소개",
      detail: "자세한 정보3",
      image: "path_to_image_3.jpg",
      uploadedTime: "2023-04-19 16:45",
    },
    {
      id: 4,
      title: "프로필 이름4",
      text: "짧은 소개",
      detail: "자세한 정보4",
      image: "path_to_image_4.jpg",
      uploadedTime: "2023-04-20 12:00",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCardSelect = (index) => {
    if (index === currentSlide) {
      alert("상세 페이지로 이동");
    } else {
      setCurrentSlide(index);
    }
  };

  const cardElements = cards.map((card, index) => (
    <div key={card.id} className="slide relative" style={{ width: "275px" }}>
      <Card
        card={card}
        onCardSelect={() => handleCardSelect(index)}
        isCenter={index === currentSlide}
      />
    </div>
  ));

  const slideWidth = 275 + 20; // 카드 너비 + 마진

  const containerStyle = {
    width: `${cards.length * slideWidth}px`, // 모든 카드를 포함할 수 있는 충분한 너비
    transform: `translateX(calc(50vw - ${
      slideWidth * currentSlide + slideWidth / 2
    }px))`,
    transition: "transform 300ms ease-out",
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="header"></div>
      <p className="my-4 py-4 px-4 w-full border bg-gray-100 text-black hover:bg-blue-100 text-center rounded-xl border-transparent">
        {cards[currentSlide].uploadedTime}
      </p>
      <div className="w-full max-w-md overflow-hidden">
        <div className={styles.cardsgrid} style={containerStyle}>
          {cardElements}
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="text-gray-600">{cards[currentSlide].detail}</p>
          <hr className="my-4" />
          <Button
            onClick={() => alert("상세 페이지로 이동")}
            className="mt-4 py-2 px-4 w-full border border-black bg-transparent text-black rounded hover:bg-blue-100"
          >
            이야기하기
          </Button>
        </div>
      </div>
      <div className="header"></div>
    </main>
  );
};

export default MainPage;
