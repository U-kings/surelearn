"use client"

import Link from "next/link"
import {
  GraduationCap,
  //   Twitter,
  //   Linkedin,
} from "lucide-react"
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6"
import Image from "next/image"

const footerLinks = {
  Product: ["Course Builder", "Analytics", "Integrations", "Enterprise"],
  Solutions: ["Higher Ed", "K-12 Schools", "Corporate", "Non-Profit"],
  Company: ["About", "Careers", "Blog", "Press"],
  Support: ["Help Center", "Community", "Contact", "Status"],
}

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/surelearn-logo-dark.png"
                alt="Surelearn Logo"
                width={170}
                height={24}
                className="block h-auto w-5/6 lg:w-auto dark:hidden"
              />
              <Image
                src="/surelearn-logo-light.png"
                alt="Surelearn Logo"
                width={170}
                height={24}
                className="hidden h-auto w-5/6 lg:w-auto dark:block"
              />
              {/* <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-700 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>

              <span className="text-3xl font-bold">
                SureLearn
              </span> */}
            </Link>

            <p className="mt-8 max-w-sm text-lg leading-9 text-muted-foreground">
              The next generation Learning Management System for enterprise and
              academic institutions worldwide.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border transition hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border transition hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="mb-6 text-xl font-semibold">{title}</h3>

                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          // className="transition-all duration-300 hover:scale-110 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
                          className="text-lg text-muted-foreground transition-colors hover:text-cyan-600"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t" />

        {/* Bottom */}
        <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between">
          <p className="text-base text-muted-foreground">
            © 2024 SureLearn Systems Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="#"
              className="text-base text-muted-foreground transition hover:text-cyan-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-base text-muted-foreground transition hover:text-cyan-600"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="text-base text-muted-foreground transition hover:text-cyan-600"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
