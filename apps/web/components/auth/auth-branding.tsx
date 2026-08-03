"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { BookOpen, GraduationCap, BarChart3 } from "lucide-react"
import { Logo } from "../logo"

export default function AuthBranding() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative hidden h-[720px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#2EAFB4] via-teal-600 to-cyan-700 p-10 text-white lg:flex lg:flex-col lg:justify-between"
    >
      {/* Decorative Background */}
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Top */}
      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-3">
          <Logo mode="light" />
          {/* < /> */}
          {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2EAFB4]">
            <GraduationCap className="h-6 w-6" />
          </div>

          <span className="text-3xl font-bold">SureLearn</span> */}
        </div>

        <h1 className="max-w-md text-5xl leading-tight font-bold">
          Continue Your
          <br />
          Learning Journey.
        </h1>

        <p className="mt-6 max-w-md text-lg leading-8 text-white/90">
          Access your courses, assignments, grades and learning resources from
          one secure platform.
        </p>

        {/* Features */}
        <div className="mt-12 space-y-6">
          <Feature
            icon={<BookOpen className="h-5 w-5" />}
            title="Access All Courses"
            text="Continue learning anytime from any device."
          />

          <Feature
            icon={<BarChart3 className="h-5 w-5" />}
            title="Track Progress"
            text="Monitor grades, assignments and achievements."
          />

          <Feature
            icon={<GraduationCap className="h-5 w-5" />}
            title="Collaborate"
            text="Learn together with classmates and instructors."
          />
        </div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 mt-10"
      >
        <Image
          src="/analytics-dashboard.png"
          //   src="/images/dashboard-preview.png"
          alt="SureLearn Dashboard"
          width={800}
          height={520}
          priority
          className="rounded-2xl border border-white/20 shadow-2xl"
        />
      </motion.div>
    </motion.section>
  )
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <motion.div
      whileHover={{
        x: 6,
      }}
      transition={{
        duration: 0.2,
      }}
      className="flex gap-4"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/80">{text}</p>
      </div>
    </motion.div>
  )
}
