"use client";
import Link from "next/link";
import React, { useState } from "react";
import SmallAvatar from "../avatars/SmallAvatar";
import OutlinedLink from "../buttons/OutlinedLink";
import Line from "../other/Line";

export default function NavbarAccountDropDown() {
  return (
    <div>
      <SmallAvatar img={"/images/user.webp"} />

      <div
        className={` absolute z-30 bg-zinc-900 rounded border border-zinc-800 p-2 top-14 right-0 flex flex-col gap-1 sm:left-auto left-0 transition-all min-w-[20em]`}
      >
        <OutlinedLink link={"/"}>
          <div className="flex w-full items-start flex-col gap-1 !text-zinc-400">
            <p className="text-sm">omar.dev</p>
            <p className="text-xs !font-normal">@omer_dev</p>
          </div>
        </OutlinedLink>

        <Line />

        {["dashboard", "create post", "reading list", "settings"].map(
          (i, index) => (
            <Link
              key={index}
              href={"/" + i.replace(" ", "-")}
              className="p-2 rounded text-zinc-400 hover:bg-indigo-600 transition-all hover:text-indigo-100 hover:underline bg-indigo-100/0 capitalize"
            >
              {i}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
