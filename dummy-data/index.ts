import { Alarm, User } from "@/types";

// TODO: auth-context.tsx 수정 필요
export const fakeMentee: User = {
  name: "김멘티",
  email: "kim-mentee@peer.com",
  imageUrl: "/avatar.jpg",
  role: "MENTEE",
};

// TODO: auth-context.tsx 수정 필요
export const fakeMentor: User = {
  name: "장멘토",
  email: "mentor@peer.com",
  imageUrl: "/avatar.jpg",
  role: "MENTOR",
};

export const dummyAlarms: Alarm[] = [
  {
    from: "침착맨",
    date: "2024-03-25 14:24:23",
    message: "상담이 확정되었습니다.",
    read: false,
    time: "38분",
  },
  {
    from: "곽준빈",
    date: "2024-03-25 14:24:23",
    message: "상담이 거절되었습니다.",
    read: true,
    time: "6시간",
  },
  {
    from: "풍월량",
    date: "2024-03-25 14:24:23",
    message: "1시간 후 상담이 시작됩니다.",
    read: true,
    time: "4일",
  },
];
