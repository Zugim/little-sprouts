"use client";

import { useState } from "react";
import Link from "next/link";
import { useClerk, useAuth } from "@clerk/nextjs";

import { Button } from "../ui/button";

import AuthControl from "./AuthControl";

export default function Nav() {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  function NavItems() {
    const navItems = [
      { title: "About", url: "/about" },
      { title: "Classes", url: "/classes" },
      { title: "Teachers", url: "/teachers" },
      { title: "Dashboard", url: "/protected/dashboard", auth: true },
    ];

    return (
      <>
        {navItems.map((item) => {
          return (
            <li key={item.title}>
              <Link
                href={item.url}
                onClick={(e) => {
                  if (!isSignedIn && item.auth) {
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </>
    );
  }

  function DesktopNav() {
    return (
      <nav className="hidden sm:flex justify-center items-center gap-4 ">
        <ul className="flex gap-4">
          <NavItems />
        </ul>
        <AuthControl />
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
              <NavItems />
            </ul>
            <AuthControl />
          </nav>
        }
      </div>
    );
  }

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
