import Link from "next/link"

import { GraduationCap } from "lucide-react"

import ThemeToggle from "./theme-toggle"
import MobileMenu from "./mobile-menu"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import { Logo } from "./logo"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden gap-10 lg:flex">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost">
            <Link href="/login">Sign In</Link>
          </Button>

          <ThemeToggle />

          <Button>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
