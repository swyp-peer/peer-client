"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { dummyAlarms } from "@/dummy-data";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { RiBellLine } from "react-icons/ri";

export const AlarmButton = () => {
  const [alarms, setAlarms] = useState(dummyAlarms);

  const handleRead = (idx: number) => {
    setAlarms((cur) => {
      const _alarmList = [...cur];
      _alarmList[idx].read = true;
      return _alarmList;
    });
  };

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <RiBellLine className="text-zinc-700 hover:text-zinc-500 text-2xl duration-100" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>알림 내역</SheetTitle>
          </SheetHeader>
          <Separator className="mt-5 mb-10" />
          {alarms.map((item, idx) => (
            <div
              className={`border px-5 py-2 flex justify-between mb-5 duration-200 ${
                !item.read && "border-b border-b-pc-300"
              }`}
              key={idx}
            >
              <hgroup>
                <ul>발신인: {item.from}</ul>
                <ul>{item.message}</ul>
                <ul>날짜: {item.date}</ul>
                <ul className="text-zinc-500 text-xs mt-1">{item.time} 전</ul>
              </hgroup>
              <button
                className={`duration-300 ${
                  item.read ? "text-black" : "text-pc-500"
                }`}
                disabled={item.read}
                onClick={() => {
                  handleRead(idx);
                }}
              >
                <FaCheck />
              </button>
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </>
  );
};
