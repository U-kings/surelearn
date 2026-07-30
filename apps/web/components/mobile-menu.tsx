"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Button } from "@workspace/ui/components/button";


import {
  Menu,
} from "lucide-react";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        <Menu />
      </SheetTrigger>

      <SheetContent side="right">
        <div className="space-y-8 mt-10">

          <a href="#">Products</a>

          <a href="#">Solutions</a>

          <a href="#">Pricing</a>

          <a href="#">About</a>

          <Button className="w-full">
            Get Started
          </Button>

        </div>
      </SheetContent>
    </Sheet>
  );
}