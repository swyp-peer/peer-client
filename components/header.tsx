//heade
import React from "react";
import Link from "next/link";
import { BellIcon } from "@heroicons/react/24/solid";

interface HeaderProps {
  currentPage: string;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ currentPage, style }) => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparents",
        zIndex: 1000,
        ...style,
      }}
    >
      <Link href="/main" style={{ cursor: "pointer" }}>
        Peer
      </Link>
      <div>{currentPage}</div>
      <div style={{ cursor: "pointer" }}>
        <BellIcon className="h-6 w-6 text-gray-600" />
      </div>
    </div>
  );
};

export default Header;
