"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { Card as UICard } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import styles from "../counsels/page.module.css";
import Link from "next/link";

const CounselPage = () => {
  const [view, setView] = useState("current");

  return (
    <main className={styles.mainContainer}>
      <div className={styles.buttonContainer}>
        <Button className={styles.navButton} onClick={() => setView("past")}>
          지난 상담
        </Button>
        <Button className={styles.navButton} onClick={() => setView("current")}>
          현재 상담
        </Button>
      </div>
      <div className={styles.content}>
        {view === "current" ? (
          <div>현재 상담 내역을 여기에 표시합니다.</div>
        ) : (
          <div>지난 상담 내역을 여기에 표시합니다.</div>
        )}
      </div>
    </main>
  );
};

export default CounselPage;
