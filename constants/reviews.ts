import { icons } from "lucide-react";

export const Reviews = [
  {
    name: "1김**",
    job: "프론트엔드 개발자",
    experience: "1년차",
    title: "정확하고 단호하게 저를 혼내주셨어요!",
    desc: "처음엔 좀 막막했다. 판소리는 풍자와 해학도 중요하지만 절규와 통곡 또한 없어서는 안 되기 때문이다. 내가 진심으로 절규하고 통곡하기 위해서는 백범의 생애에 대한 정확한 이해와 더불어 백범의 뜻과생각에 내 자신을 일치시켜야만 했다",
  },
  {
    name: "2장**",
    job: "백엔드 개발자",
    experience: "신입",
    title: "최악이었어요!",
    desc: "전문성이 전혀 없고 아주 별로였어요. 판소리는 풍자와 해학도 중요하지만 절규와 통곡 또한 없어서는 안 되기 때문이다. 내가 진심으로 절규하고 통곡하기 위해서는 백범의 생애에 대한 정확한 이해와 더불어 백범의 뜻과생각에",
  },
  {
    name: "3김**",
    job: "기획자",
    experience: "3년차",
    title: "내가 더 잘하겠는데?",
    desc: "2010년 초연한 이래 모두 50여 차례 공연했다. 관객들의 반응은 다행히도 매우 좋았다. 판소리로 백범을 만나 즐겁다고, 감격스럽다고들 했다. 3시간이 넘는 대작이어서 나를 포함",
  },
  {
    name: "4장*",
    job: "UI/UX 디자이나",
    experience: "10년차",
    title: "가슴을 울리는 전율!",
    desc: "내가 진심으로 절규하고 통곡하기 위해서는 백범의 생애에 대한 정확한 이해와 더불어 백범의 뜻과생각에",
  },
  {
    name: "5김**",
    job: "프론트엔드 개발자",
    experience: "1년차",
    title: "정확하고 단호하게 저를 혼내주셨어요!",
    desc: "처음엔 좀 막막했다. 판소리는 풍자와 해학도 중요하지만 절규와 통곡 또한 없어서는 안 되기 때문이다. 내가 진심으로 절규하고 통곡하기 위해서는 백범의 생애에 대한 정확한 이해와 더불어 백범의 뜻과생각에 내 자신을 일치시켜야만 했다",
  },
  {
    name: "6장**",
    job: "백엔드 개발자",
    experience: "신입",
    title: "최악이었어요!",
    desc: "전문성이 전혀 없고 아주 별로였어요. 판소리는 풍자와 해학도 중요하지만 절규와 통곡 또한 없어서는 안 되기 때문이다. 내가 진심으로 절규하고 통곡하기 위해서는 백범의",
  },
  {
    name: "1김**",
    job: "프론트엔드 개발자",
    experience: "1년차",
    title: "정확하고 단호하게 저를 혼내주셨어요!",
    desc: "처음엔 좀 막막했다. 판소리는 풍자와 해학도 중요하지만 절규와 통곡 또한 없어서는 안 되기 때문이다. 내가 진심으로 절규하고 통곡하기 위해서는 백범의 생애에 대한 정확한 ",
  },
  {
    name: "2장**",
    job: "백엔드 개발자",
    experience: "신입",
    title: "최악이었어요!",
    desc: "전문성이 전혀 없고 아주 별로였어요. 판소리는 풍자와 해학도 중요하지만 절규와 통곡 또한 없어서는 안 되기 때문이다. 내가 진심으로 절규하고 통곡하기 위해서는 백범의 ",
  },
  {
    name: "3김**",
    job: "기획자",
    experience: "3년차",
    title: "내가 더 잘하겠는데?",
    desc: "2010년 초연한 이래 모두 50여 차례 공연했다. 관객들의 반응은 다행히도 매우 좋았다. 판소리로 백범을 만나 즐겁다고, 감격스럽다고",
  },
  {
    name: "4장*",
    job: "UI/UX 디자이나",
    experience: "10년차",
    title: "가슴을 울리는 전율!",
    desc: "내가 진심으로 절규하고 통곡하기 위해서는 백범의 생애에 대한 정확한 이해와 더불어 백범의 뜻과생각에",
  },
];

import { RiBookmark2Line } from "react-icons/ri";
import { RiPsychotherapyLine } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";
import { IconType } from "react-icons/lib";
import { RiUser3Line } from "react-icons/ri";

type Menu = {
  name: string;
  key: string;
  icon: IconType;
};
export const Menus: Menu[] = [
  {
    name: "멘토",
    key: "/mentors",
    icon: RiPsychotherapyLine,
  },
  {
    name: "저장 목록",
    key: "/bookmark",
    icon: RiBookmark2Line,
  },
  {
    name: "나의 상담",
    key: "/counsels",
    icon: BiDonateHeart,
  },
  {
    name: "커뮤니티",
    key: "/community",
    icon: CgCommunity,
  },
];

export const BottomMenus: Menu[] = [
  {
    name: "멘토",
    key: "/mentors",
    icon: RiPsychotherapyLine,
  },
  {
    name: "나의 상담",
    key: "/counsels",
    icon: BiDonateHeart,
  },
  {
    name: "커뮤니티",
    key: "/community",
    icon: CgCommunity,
  },
  {
    name: "마이페이지",
    key: "/profile",
    icon: RiUser3Line,
  },
];
