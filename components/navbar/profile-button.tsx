"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { RiUser3Line } from "react-icons/ri";
import { RiBellLine } from "react-icons/ri";

export const ProfileButton = () => {
  const auth = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={auth.user?.imageUrl} />
          <AvatarFallback>
            <RiUser3Line className="text-zinc-700 text-2xl" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{auth.user?.name}</DropdownMenuLabel>
        {auth.isLoggedIn && <DropdownMenuSeparator />}
        {auth.isLoggedIn && <DropdownMenuItem>마이페이지</DropdownMenuItem>}
        {auth.isLoggedIn && (
          <DropdownMenuItem onClick={auth.signOut}>로그아웃</DropdownMenuItem>
        )}
        {!auth.isLoggedIn && (
          <DropdownMenuItem>
            <Link href="/sign-in">로그인</Link>
          </DropdownMenuItem>
        )}
        {!auth.isLoggedIn && (
          <DropdownMenuItem>
            <Link href="/sign-up">회원가입</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
