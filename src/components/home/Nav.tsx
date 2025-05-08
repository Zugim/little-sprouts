"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "../ui/button";

const navItems = [
  { text: "Link 1", url: "/" },
  { text: "Link 2", url: "/" },
  { text: "Link 3", url: "/" },
  { text: "Link 4", url: "/" },
];

function DesktopNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-4">
        {navItems.map((item) => {
          return (
            <li key={item.text}>
              <Link href={item.url}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileNav() {
  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <div className="block sm:hidden">
      <Button
        className="relative h-8 w-8  transition-all"
        onClick={() => {
          setMenuToggled(!menuToggled);
        }}
      >
        <span
          className={`absolute h-0.5 bg-white transition-all ${
            menuToggled
              ? "w-5 top-1/2 -translate-y-1/2 rotate-45"
              : "w-4 top-2 -translate-y-0 rotate-0"
          }`}
        />
        <span
          className={`absolute h-0.5 bg-white transition-all ${
            menuToggled
              ? "w-5 top-1/2 -translate-y-1/2 -rotate-45"
              : "w-4 top-4 -translate-y-1/2 rotate-0"
          }`}
        />
        <span
          className={`absolute h-0.5 w-4 bg-white transition-all ${
            menuToggled ? "opacity-0" : "top-6 -translate-y-full opacity-100"
          }`}
        />
      </Button>
      {
        <nav
          className={`
            absolute top-12 left-0 w-screen h-[calc(100vh-3rem)] bg-green-200 transition duration-300 ease-in-out
            ${menuToggled ? "-z10 opacity-100" : "-z-10 opacity-0"}
          )`}
        >
          <ul className="flex-col gap-4">
            {navItems.map((item) => {
              return (
                <li key={item.text}>
                  <Link href={item.url}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      }
    </div>
  );
}

export default function Nav() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
