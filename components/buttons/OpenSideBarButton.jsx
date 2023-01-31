"use client";

import { FiMenu } from "react-icons/fi";

export default function OpenSideBarButton({ e }) {
  return (
    <button
      onClick={console.log("S")}
      className="p-2 rounded bg-zinc-700/0 hover:bg-zinc-800 border border-zinc-800 transition-all active:scale-95 active:bg-zinc-900 "
    >
      <FiMenu size={22} />
    </button>
  );
}
