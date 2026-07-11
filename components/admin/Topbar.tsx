"use client";

import { ChevronRight } from "lucide-react";

import { NotificationMenu } from "./NotificationMenu";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";

type TopbarProps = {
  breadcrumbs: string[];
  title: string;
};

export function Topbar({ breadcrumbs, title }: TopbarProps) {
  return (
    <header
      className="sticky top-0 z-20 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}
    >
      <div className="flex flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/55">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb} className="flex items-center gap-2">
                <span>{crumb}</span>
                {index < breadcrumbs.length - 1 ? <ChevronRight size={12} /> : null}
              </span>
            ))}
          </div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="w-full min-w-[240px] max-w-[320px]">
            <SearchBar />
          </div>

          <div className="flex items-center gap-3">
            <NotificationMenu />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
