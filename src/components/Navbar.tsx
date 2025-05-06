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
        onClick={() => {
          setMenuToggled(!menuToggled);
        }}
      >
        {menuToggled ? <X /> : <Menu />}
      </Button>
      {
        <nav
          className={clsx(
            "absolute top-12 left-0 w-screen h-[calc(100vh-3rem)] bg-green-200 transition duration-300 ease-in-out",
            { "-z-10 opacity-0": !menuToggled, "-z10 opacity-100": menuToggled }
          )}
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
