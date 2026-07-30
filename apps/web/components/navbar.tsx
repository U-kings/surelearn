import Link from "next/link";

import { GraduationCap } from "lucide-react";


import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";
import { Button } from "@workspace/ui/components/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="rounded-md bg-teal-700 p-2 text-white">
            <GraduationCap size={18} />
          </div>

          <span className="font-bold text-xl">
            SureLearn
          </span>
        </Link>

        <nav className="hidden lg:flex gap-10">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost">
            Sign In
          </Button>

          <ThemeToggle />

          <Button>
            Get Started
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}