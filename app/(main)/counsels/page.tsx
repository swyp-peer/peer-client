"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { Card as UICard } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import styles from "../counsels/page.module.css";
import Link from "next/link";

const CounselPage = () => {
  return (
    <main className={styles.mainContainer}>
      나의 상담 신청 내역을 조회하는 페이지(커피챗 앱의 나의 커피챗 페이지라고
      생각하면 될듯)
    </main>
  );
};

export default CounselPage;
