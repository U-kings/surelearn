"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const links = [
  { name: "Products", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        {/* <Button variant="ghost" size="icon" aria-label="Open menu"> */}
        <div className="p-3">
          <Menu className="h-5 w-5" />
        </div>
        {/* </Button> */}
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] px-5">
        <nav className="mt-10 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}

          <Button className="mt-4 w-full" onClick={() => setOpen(false)}>
            Get Started
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
