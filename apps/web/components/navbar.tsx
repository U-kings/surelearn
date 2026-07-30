import Link from "next/link"

import { GraduationCap } from "lucide-react"

import ThemeToggle from "./theme-toggle"
import MobileMenu from "./mobile-menu"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="">
          {/* <div className="rounded-md bg-teal-700 p-2 text-white"> */}
            {/* <GraduationCap size={18} /> */}
            <Image
              src="/surelearn-logo-dark.png"
              alt="Surelearn Logo"
              width={170}
              height={24}
              className="block dark:hidden"
            />
            <Image
              src="/surelearn-logo-light.png"
              alt="Surelearn Logo"
              width={170}
              height={24}
              className="hidden dark:block"
            />
          </div>

          {/* <span className="text-xl font-bold">SureLearn</span> */}
        </Link>

        <nav className="hidden gap-10 lg:flex">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost">Sign In</Button>

          <ThemeToggle />

          <Button>Get Started</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
