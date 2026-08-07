"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  ChevronDown,
  LayoutDashboard,
  Settings,
  Trophy,
  Users,
  LogOut,
  HelpCircle,
  X,
  Award,
  BarChart3,
  ClipboardList,
  FileQuestion,
  GraduationCap,
  Megaphone,
  UserRound,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Logo } from "../logo"

interface DashboardSidebarProps {
  mobile?: boolean
  onClose?: () => void
}

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Courses",
    href: "/dashboard/courses",
    icon: GraduationCap,
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: Users,
  },
  {
    title: "Teachers",
    href: "/dashboard/teachers",
    icon: UserRound,
  },
  {
    title: "Classes",
    href: "/dashboard/classes",
    icon: BookOpen,
  },
  {
    title: "Assignments",
    href: "/dashboard/assignments",
    icon: ClipboardList,
  },
  {
    title: "Quizzes",
    href: "/dashboard/quizzes",
    icon: FileQuestion,
  },
  {
    title: "Certificates",
    href: "/dashboard/certificates",
    icon: Award,
  },
  {
    title: "Announcements",
    href: "/dashboard/announcements",
    icon: Megaphone,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  //   {
  //     title: "Settings",
  //     href: "/dashboard/settings",
  //     icon: Settings,
  //   },
]
const secondaryNavigation = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

export default function DashboardSidebar({
  mobile = false,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r bg-[#f7f9fc] dark:bg-slate-950",
        mobile ? "w-[280px]" : "fixed inset-y-0 left-0 hidden w-[260px] lg:flex"
      )}
    >
      {/* Logo */}
      <div className="flex h-[72px] items-center justify-between border-b px-6">
        <div className="flex items-center gap-2">
          {/* <Link href="/dashboard" className="flex items-center gap-2"> */}
          <div className="flex items-center gap-4">
            {/* <div className="flex h-12 w-12 items-center justify-center bg-[#35b6b7] text-xl font-bold text-[#073c4a]">
              S
            </div> */}

            <div className="mt-0">
              <Logo className="lg:w-4/6" />
              {/* <p className="text-[28px] leading-none font-bold tracking-tight text-[#007f7b]">
                SureLearn
              </p> */}

              <p className="mt-1 text-sm font-medium text-slate-500">
                LMS Admin
              </p>
            </div>
          </div>
          {/* <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2EAFB4]">
            <BookOpen className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-bold tracking-tight">SureLearn</span> */}
          {/* </Link> */}
        </div>

        {mobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* User */}
      <div className="hidden border-b p-4">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-muted">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2EAFB4]/10 font-semibold text-[#2EAFB4]">
            JD
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">John Doe</p>

            <p className="truncate text-xs text-muted-foreground">Student</p>
          </div>

          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-5">
        <p className="mb-3 hidden px-3 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
          Learning
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon

            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "relative flex h-12 items-center gap-4 rounded-md px-4 text-[16px] font-medium transition-colors",
                  active
                    ? "bg-[#e2f3f5] text-[#007f7b] dark:bg-[#007f7b]/10 dark:text-[#42c7c8]"
                    : "text-[#596780] hover:bg-slate-100 hover:text-[#172b45] dark:text-slate-400 dark:hover:bg-slate-900"
                )}
                // className={cn(
                //   "flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-all",
                //   active
                //     ? "bg-[#2EAFB4]/10 text-[#2EAFB4]"
                //     : "text-muted-foreground hover:bg-muted hover:text-foreground"
                // )}
              >
                <Icon className="h-[18px] w-[18px]" />

                <span>{item.title}</span>
                {active && (
                  <span className="absolute top-0 left-0 h-full w-1 rounded-r-full bg-[#007f7b]" />
                )}
              </Link>
            )
          })}
        </nav>

        <p className="mt-8 mb-3 px-3 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
          General
        </p>

        <nav className="space-y-1">
          {secondaryNavigation.map((item) => {
            const Icon = item.icon

            const active = pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-all",
                  active
                    ? "bg-[#2EAFB4]/10 text-[#2EAFB4]"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-[18px] w-[18px]" />

                <span>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="border-t p-4">
        <button className="flex h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30">
          <LogOut className="h-[18px] w-[18px]" />
          Sign out
        </button>
      </div>
    </aside>
  )
}
