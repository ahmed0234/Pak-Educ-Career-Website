"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="container border-b Navbar font-[family-name:var(--font-geist-sans)] flex justify-between items-center px-4 py-8">
        <h1 className="text-2xl italic">
          <Link href={"/"}>Pak Edu Career</Link>{" "}
        </h1>
        <AlignJustify
          className="cursor-pointer md:hidden"
          onClick={() => setopen(!open)}
        />
        <div className="links  gap-6 hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-lg">
              Admissions
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>BS Admissions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"/BSAdmissions"}>
                <DropdownMenuLabel>MPhil/MS Admissions</DropdownMenuLabel>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>PhD Admissions</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-lg">
              Universities
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Government Universities</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Private Universities</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>International Universities</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button variant={"secondary"} className="hidden md:block">
          Contact Us
        </Button>
      </div>

      <div
        className={`${
          open ? "flex" : "hidden"
        } dropdown  bg-zinc-900 py-6 container px-4 mt-4  flex-col items-start justify-start gap-6`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>Admissions</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>BS Admissions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"/BSAdmissions"}>
              <DropdownMenuLabel>MPhil/MS Admissions</DropdownMenuLabel>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>PhD Admissions</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Universities</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Government Universities</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Private Universities</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>International Universities</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant={"secondary"}>Contact Us</Button>
      </div>
    </>
  );
};

export default Navbar;
