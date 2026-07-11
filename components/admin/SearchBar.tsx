"use client";

import { Search } from "lucide-react";

import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";

export function SearchBar() {
  return (
    <div
      className="flex w-full items-center gap-3 rounded-full border px-4 py-2.5 transition focus-within:border-[#FF6B00]"
      style={{
        borderColor: "rgba(255,255,255,0.12)",
        backgroundColor: "rgba(255,255,255,0.04)",
        borderRadius: radius.full,
      }}
    >
      <Search size={16} className="text-white/60" />
      <input
        type="search"
        placeholder="Buscar en panel"
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/45"
        aria-label="Buscar en panel"
      />
    </div>
  );
}
