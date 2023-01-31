"use client";
import Image from "next/image";

export default function SmallAvatar({ img }) {
  return (
    <div className="hover:ring-4 ring-0 ring-indigo-900 cursor-pointer rounded-full relative w-[2.5em] h-[2.5em]">
      <Image
        fill
        className="rounded-full w-full h-full object-cover object-center"
        src={img}
        alt="knwri"
      />
    </div>
  );
}
