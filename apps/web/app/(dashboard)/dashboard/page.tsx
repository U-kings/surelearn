"use client";

import { motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Library,
  MoreHorizontal,
  Plus,
  Settings,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";

const stats = [
  {
    label: "TOTAL STUDENTS",
    value: "12,450",
    change: "+12% from last month",
    icon: Users,
    positive: true,
  },
  {
    label: "ACTIVE TEACHERS",
    value: "420",
    change: "+3 new this week",
    icon: UserRound,
    positive: true,
  },
  {
    label: "TOTAL COURSES",
    value: "1,842",
    change: "Stable growth",
    icon: GraduationCap,
    positive: false,
  },
  {
    label: "AVG COMPLETION",
    value: "78.5%",
    change: "+2.4% overall",
    icon: CheckCircle2,
    positive: true,
  },
  {
    label: "MRR REVENUE",
    value: "$284k",
    change: "+18% YoY",
    icon: WalletCards,
    positive: true,
  },
];

const activities = [
  {
    icon: UserRound,
    title: "Sarah Jenkins enrolled in",
    highlight: "Advanced Machine Learning",
    time: "2 minutes ago",
  },
  {
    icon: Library,
    title: "Dr. Alan Turing published a new assignment in",
    highlight: "Crypto 101",
    time: "1 hour ago",
  },
  {
    icon: Award,
    title: "24 Students completed the module",
    highlight: "Design Systems Basics",
    time: "3 hours ago",
  },
  {
    icon: ShieldCheck,
    title: "System update scheduled for tonight at 2:00 AM UTC.",
    highlight: "",
    time: "5 hours ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-full bg-[#f7f9fc] dark:bg-slate-950">
      <div className="mx-auto max-w-[1500px]">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#0d2038] dark:text-white sm:text-4xl">
              Dashboard Overview
            </h1>

            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              Welcome back. Here&apos;s what&apos;s happening today.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="h-11 rounded-lg border-slate-300 bg-white px-5 dark:bg-slate-900"
            >
              Export Report
            </Button>

            <Button className="h-11 rounded-lg bg-[#007f7b] px-5 text-white hover:bg-[#006f6c]">
              <Plus className="mr-2 h-4 w-4" />
              Create Course
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              index={index}
            />
          ))}
        </div>

        {/* Main analytics */}
        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_350px]">
          <EnrollmentChart />

          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stat Card                                                                  */
/* -------------------------------------------------------------------------- */

function StatCard({
  label,
  value,
  change,
  icon: Icon,
  positive,
  index,
}: {
  label: string;
  value: string;
  change: string;
  icon: React.ElementType;
  positive: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
      }}
    >
      <Card className="h-full rounded-xl border border-slate-300 bg-white shadow-none dark:border-slate-800 dark:bg-slate-900">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <p className="max-w-[130px] text-xs font-semibold tracking-[0.08em] text-slate-500 dark:text-slate-400">
              {label}
            </p>

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#007f7b]/10 text-[#007f7b]">
              <Icon className="h-4 w-4" />
            </div>
          </div>

          <p className="mt-5 text-[40px] font-medium leading-none tracking-tight text-[#0d2038] dark:text-white">
            {value}
          </p>

          <div
            className={`mt-2 flex items-start gap-1 text-xs font-medium ${
              positive
                ? "text-[#007f7b]"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {positive && (
              <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            )}

            <span>{change}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Enrollment Chart                                                           */
/* -------------------------------------------------------------------------- */

function EnrollmentChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.3 }}
    >
      <Card className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-none dark:border-slate-800 dark:bg-slate-900">
        <CardContent className="p-0">
          <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
            <h2 className="text-xl font-semibold text-[#0d2038] dark:text-white">
              Course Enrollment Performance
            </h2>

            <Button
              variant="outline"
              className="w-fit rounded-lg border-slate-300 bg-white font-normal dark:bg-slate-900"
            >
              Last 30 Days
            </Button>
          </div>

          <div className="relative h-[380px] px-5 pb-8 pt-8 sm:px-7">
            {/* Horizontal grid */}
            <div className="absolute inset-x-7 top-14 bottom-16 flex flex-col justify-between">
              {[1, 2, 3, 4].map((line) => (
                <div
                  key={line}
                  className="border-t border-slate-200 dark:border-slate-800"
                />
              ))}
            </div>

            {/* Chart */}
            <svg
              viewBox="0 0 800 300"
              preserveAspectRatio="none"
              className="absolute inset-x-7 top-10 h-[280px] w-[calc(100%-56px)] overflow-visible"
            >
              <path
                d="
                  M 0 220
                  C 55 220, 80 190, 125 170
                  S 190 145, 230 170
                  S 285 190, 325 165
                  S 390 120, 445 95
                  S 510 70, 560 92
                  S 630 90, 680 65
                  S 750 25, 800 5
                "
                fill="none"
                stroke="#007f7b"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />

              <circle
                cx="230"
                cy="170"
                r="4"
                fill="#007f7b"
              />

              <circle
                cx="560"
                cy="92"
                r="4"
                fill="#007f7b"
              />

              <circle
                cx="800"
                cy="5"
                r="4"
                fill="#007f7b"
              />
            </svg>

            {/* X axis */}
            <div className="absolute inset-x-7 bottom-4 flex justify-between text-xs text-slate-500">
              <span>Wk 1</span>
              <span>Wk 2</span>
              <span>Wk 3</span>
              <span>Wk 4</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Recent Activity                                                            */
/* -------------------------------------------------------------------------- */

function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.38 }}
    >
      <Card className="h-full overflow-hidden rounded-xl border border-slate-300 bg-white shadow-none dark:border-slate-800 dark:bg-slate-900">
        <CardContent className="p-0">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
            <h2 className="text-xl font-semibold text-[#0d2038] dark:text-white">
              Recent Activity
            </h2>

            <button className="text-sm font-medium text-[#007f7b] hover:underline">
              View All
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div
                  key={index}
                  className="flex gap-4 px-6 py-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-slate-500 dark:bg-blue-950/30 dark:text-slate-400">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm leading-5 text-[#172b45] dark:text-slate-200">
                      {activity.title}{" "}
                      {activity.highlight && (
                        <span className="font-medium text-[#007f7b]">
                          {activity.highlight}
                        </span>
                      )}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}