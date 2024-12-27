import React from "react";
import NavButton from "./NavButton";
import { File, HomeIcon, LogOut, UsersRound } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-6 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton label="Home" href="/home" icon={HomeIcon} />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0 "
            title="home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1 ">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton label="Tickets" href="/tickets" icon={File} />
          <NavButton label="Customers" href="/customers" icon={UsersRound} />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="LogOut"
            title="Logout"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
