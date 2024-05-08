"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { Card as UICard } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import styles from "../mentors/mainpage.module.css";
import Link from "next/link";

interface CardProps {
  card: {
    id: number;
    title: string;
    text: string;
    detail: string;
    image: string;
    uploadedTime: string;
  };
  onCardSelect: () => void;
  isCenter: boolean;
}

const Card: React.FC<CardProps> = ({ card, onCardSelect }) => (
  <div className={styles.card} onClick={onCardSelect}>
    <img src={card.image} alt="프로필 이미지" />
    <div className={styles.cardcontent}>
      <p className={styles.hiddensm}>{card.uploadedTime}</p>
      <p>{card.title}</p>
      <p>{card.text}</p>
      <p className={styles.hiddensm}>{card.detail}</p>
    </div>
  </div>
);

const MainPage = () => {
  const [cards] = useState([
    {
      id: 1,
      title: "풍월량",
      text: "Product Director",
      detail: "팀원에게 말 못할 고민들을 언제든지 털어놓으세요.",
      image: "https://github.com/shadcn.png",
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
      image: "https://github.com/shadcn.png",
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
    {
      id: 4,
      title: "프로필 이름4",
      text: "짧은 소개",
      detail: "자세한 정보4",
      image: "path_to_image_4.jpg",
      uploadedTime: "2023-04-20 12:00",
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

  const handleCardSelect = (index: number) => {
    setCurrentSlide(index);
    if (index === currentSlide) {
    }
  };

  const cardElements = cards.map((card, index) => (
    <Link key={card.id} href={`/mentors/1/reserve`} passHref>
      <div
        className="slide relative"
        style={{ width: "275px" }}
        onClick={() => handleCardSelect(index)}
      >
        <Card
          card={card}
          onCardSelect={() => handleCardSelect(index)} // 여기에서 onCardSelect prop을 전달합니다.
          isCenter={index === currentSlide}
        />
      </div>
    </Link>
  ));

  const slideWidth = 275 + 20;

  const containerStyle = {
    width: `${cards.length * slideWidth}px`,
    transform: `translateX(calc(50vw - ${
      slideWidth * currentSlide + slideWidth / 2
    }px))`,
    transition: "transform 300ms ease-out",
  };

  return (
    <main
      className={
        "flex flex-col items-center justify-center min-h-screen bg-white p-4"
      }
    >
      <div className={styles.detailscontainer}>
        <p
          className="py-4 px-4 w-full border bg-gray-100 text-black hover:bg-blue-100 text-center rounded-xl border-transparent"
          style={{ marginTop: "68px", width: "90vw" }}
        >
          {cards[currentSlide].uploadedTime}
        </p>
      </div>

      <div className={styles.maincontainer}>
        <hr className="my-4" />
        <div className={styles.cardsgrid} style={containerStyle}>
          {cardElements}
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <div className={styles.detailscontainer}>
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
      </div>
    </main>
  );
};

export default MainPage;
