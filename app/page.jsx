import HomeLeftSide from "@/components/home/HomeLeftSide";
import HomeRightSide from "@/components/home/HomeRightSide";
import React from "react";

export default function page() {
  return (
    <div
      className="max-w-5xl mx-auto py-5 grid  min-h-screen gap-4
    
    lg:grid-cols-[minmax(12em,_13em)_1fr_minmax(13em,_14em)]
    sm:grid-cols-[minmax(12em,_13em)_1fr]
    grid-cols-1
    "
    >
      <HomeLeftSide />
      <div className="bg-zinc-900"></div>
      <HomeRightSide />{" "}
    </div>
  );
}
