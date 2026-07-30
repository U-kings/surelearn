import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Search, Bell, MoreHorizontal, BookOpen, Code, Palette, BarChart3 } from "lucide-react";
// import { Avatar, AvatarFallback } from "./ui/avatar";

const stats = [
  { label: "Total Courses", value: "7" },
  { label: "Active Students", value: "1,248" },
  { label: "Completion Rate", value: "84%" },
  { label: "Average Score", value: "91.6%" },
];

const courses = [
  { icon: Code, name: "Advanced JavaScript", progress: 75, modules: "3 modules left" },
  { icon: Palette, name: "UX Design Principles", progress: 42, modules: "5 modules left" },
  { icon: BarChart3, name: "Python for Data Science", progress: 91, modules: "1 module left" },
  { icon: BookOpen, name: "Digital Marketing", progress: 56, modules: "4 modules left" },
];

const activities = [
  { name: "Maria K.", action: "completed React Fundamentals", time: "2m ago" },
  { name: "David G.", action: "started UX Strategy", time: "15m ago" },
  { name: "Maria K.", action: "completed React Fundamentals quiz", time: "1h ago" },
];

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-amber-400" />
        <div className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        {/* Top bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-card-foreground">
              Welcome back, Alex! 👋
            </h3>
            <p className="text-xs text-muted-foreground">Date: Tuesday, November 14, 2023</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-full items-center gap-2 rounded-md border border-border bg-background px-2 text-xs text-muted-foreground sm:w-48">
              <Search className="h-3.5 w-3.5" />
              Search courses, assignments...
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground">
              <Bell className="h-3.5 w-3.5" />
            </button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-[10px] font-medium text-primary-foreground">
                AL
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-background p-3">
              <p className="text-[10px] font-medium text-muted-foreground uppercase">{stat.label}</p>
              <p className="mt-1 text-lg font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Chart + activity */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="sm:col-span-2 rounded-xl border border-border bg-background p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground">Learning Progress Overview</p>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                Progress +12%
              </span>
            </div>
            <div className="mt-3 h-24 w-full">
              <svg viewBox="0 0 300 80" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  points="0,60 50,45 100,55 150,30 200,40 250,20 300,25"
                  className="text-muted-foreground/40"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  points="0,65 50,55 100,50 150,45 200,35 250,40 300,15"
                  className="text-primary"
                />
                <polygon
                  fill="url(#area)"
                  points="0,65 50,55 100,50 150,45 200,35 250,40 300,15 300,80 0,80"
                  className="text-primary"
                />
                <circle cx="300" cy="15" r="3" className="fill-primary" />
              </svg>
            </div>
            <div className="mt-2 flex items-center gap-4 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary" /> This Month
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/40" /> Last Month
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-3">
            <p className="text-xs font-semibold text-foreground">Recent Activity</p>
            <div className="mt-3 space-y-3">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Avatar className="h-6 w-6 shrink-0">
                    <AvatarFallback className="bg-secondary text-[8px] text-secondary-foreground">
                      {activity.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-medium text-foreground">
                      {activity.name} {activity.action}
                    </p>
                    <p className="text-[9px] text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course cards */}
        <div>
          <p className="text-xs font-semibold text-foreground">My Active Courses</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {courses.map((course) => (
              <div key={course.name} className="rounded-xl border border-border bg-background p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <course.icon className="h-4 w-4" />
                </div>
                <p className="mt-2 truncate text-[10px] font-semibold text-foreground">
                  {course.name}
                </p>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="mt-1 text-[9px] text-muted-foreground">{course.modules}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
