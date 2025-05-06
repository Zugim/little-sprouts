"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { Button } from "./ui/button";

function DesktopNavbar() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Link 1</Link>
        </li>
        <li>
          <Link href="/">Link 2</Link>
        </li>
        <li>
          <Link href="/">Link 3</Link>
        </li>
      </ul>
    </nav>
  );
}

function MobileNavbar() {
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
          className={`absolute h-0.5 w-5 bg-white transition-all ${
            menuToggled
              ? "top-1/2 -translate-y-1/2 rotate-45"
              : "top-2 -translate-y-0 rotate-0"
          }`}
        />
        <span
          className={`absolute h-0.5 w-5 bg-white transition-all ${
            menuToggled
              ? "top-1/2 -translate-y-1/2 -rotate-45"
              : "top-4 -translate-y-1/2 rotate-0"
          }`}
        />
        <span
          className={`absolute h-0.5 w-5 bg-white transition-all ${
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
            <li>
              <Link href="/">Link 1</Link>
            </li>
            <li>
              <Link href="/">Link 2</Link>
            </li>
            <li>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>
      }
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}
