import React from "react";
import { MainHeader } from "./mainPageHeader";
import { Course } from "./courseComp";

export function MainWebsite({ isDark, setDark }) {
  return (
    <div>
      <MainHeader isDark={isDark} setDark={setDark} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center h-screen space-x-2">
        <Course name="kavan" source="../assets/one.jpeg" />
        <Course name="kavan" source="../assets/one.jpeg" />
        <Course name="kavan" source="../assets/one.jpeg" />
        <Course name="kavan" source="../assets/one.jpeg" />
        <Course name="kavan" source="../assets/one.jpeg" />
        <Course name="kavan" source="../assets/one.jpeg" />
      </div>
    </div>
  );
}
