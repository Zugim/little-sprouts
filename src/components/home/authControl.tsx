"use client";

import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { UserCircle2 } from "lucide-react";

import { Button } from "../ui/button";

export default function AuthControl() {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline">
            <UserCircle2 className="size-5" />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
