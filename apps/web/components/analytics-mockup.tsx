"use client";

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Search, Bell, BarChart3, TrendingUp, Users, DollarSign, Activity } from "lucide-react";

// Real-time telemetry data arrays matching your exact structural requirements
const stats = [
  { label: "Active Sessions", value: "3,842" },
  { label: "Gross Revenue", value: "$48,290" },
  { label: "Conversion Rate", value: "2.84%" },
  { label: "System Health", value: "99.9%" },
];

const analyticsNodes = [
  { icon: Users, name: "User Auth Service", progress: 88, modules: "Load optimal" },
  { icon: DollarSign, name: "Stripe Webhook Gateway", progress: 95, modules: "0 errors pending" },
  { icon: BarChart3, name: "Data Ingestion Pipeline", progress: 62, modules: "Queue throttling" },
  { icon: Activity, name: "Background Cron Engines", progress: 100, modules: "Completed" },
];

const activities = [
  { name: "Node NYC-1", action: "triggered scale-up policy automatically", time: "2m ago" },
  { name: "DB Main", action: "completed automatic vacuum maintenance", time: "15m ago" },
  { name: "API V2", action: "detected peak spike from client_id_882", time: "1h ago" },
];

export function AnalyticsMockup() {
  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5 font-mono text-[11px]">
      {/* OS Terminal Chrome Bar */}
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[10px] text-muted-foreground/80 font-sans tracking-tight">core_engine_v2.4</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] font-sans">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          LIVE_METRICS
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        {/* Top Control Bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xs font-bold font-sans text-card-foreground uppercase tracking-wider">
              System Telemetry Matrix
            </h3>
            <p className="text-[10px] text-muted-foreground">TIMESTAMP: 2026-07-30 04:49:12 UTC</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-full items-center gap-2 rounded-md border border-border bg-background px-2 text-xs text-muted-foreground sm:w-48">
              <Search className="h-3.5 w-3.5" />
              <input 
                type="text" 
                placeholder="FILTER_METRICS..." 
                className="bg-transparent border-none outline-none w-full placeholder:text-muted-foreground/50 text-foreground text-[11px]"
              />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground bg-background">
              <Bell className="h-3.5 w-3.5" />
            </button>
            <Avatar className="h-8 w-8 ring-1 ring-border">
              <AvatarFallback className="bg-primary text-[10px] font-medium text-primary-foreground">
                SYS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Analytics High-Density Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-background p-3">
              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              <p className="mt-1 text-base font-bold text-foreground tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Vector Line Throughput Graph + Activity Pipeline */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="sm:col-span-2 rounded-xl border border-border bg-background p-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold font-sans text-foreground">Data Throughput Monitor</p>
              <span className="rounded bg-primary/10 border border-primary/20 px-1.5 py-0.5 text-[9px] font-bold text-primary">
                EFF_IDX: 98.4
              </span>
            </div>
            
            {/* Technical Plot Graph Matrix */}
            <div className="mt-3 h-24 w-full relative bg-black/[0.02] border border-border/40 rounded">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px)] bg-[size:12px_12px]" />
              <svg viewBox="0 0 300 80" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  points="0,60 50,45 100,55 150,30 200,40 250,20 300,25"
                  className="text-muted-foreground/30"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  points="0,65 50,55 100,50 150,45 200,35 250,40 300,15"
                  className="text-primary"
                />
                <polygon
                  fill="url(#area)"
                  points="0,65 50,55 100,50 150,45 200,35 250,40 300,15 300,80 0,80"
                  className="text-primary"
                />
                <circle cx="300" cy="15" r="2.5" className="fill-primary" />
              </svg>
            </div>
            <div className="mt-2 flex items-center gap-4 text-[9px] text-muted-foreground uppercase font-semibold">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Node Cluster Alpha
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" /> Historic Avg
              </span>
            </div>
          </div>

          {/* Infrastructure Activity Stream Logs */}
          <div className="rounded-xl border border-border bg-background p-3">
            <p className="text-xs font-semibold font-sans text-foreground">Cluster Event Log</p>
            <div className="mt-3 space-y-3">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-2 border-b border-border/40 pb-2 last:border-0 last:pb-0">
                  <Avatar className="h-5 w-5 shrink-0 ring-1 ring-border">
                    <AvatarFallback className="bg-secondary text-[8px] text-secondary-foreground font-sans">
                      {activity.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 text-[10px]">
                    <p className="text-foreground leading-snug">
                      <span className="font-bold text-primary">{activity.name}</span> {activity.action}
                    </p>
                    <p className="text-[9px] text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distributed Microservice Nodes Grid */}
        <div>
          <p className="text-xs font-semibold font-sans text-foreground">Operational Sub-Nodes</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {analyticsNodes.map((node) => (
              <div key={node.name} className="rounded-xl border border-border bg-background p-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <node.icon className="h-3.5 w-3.5" />
                </div>
                <p className="mt-2 truncate text-[10px] font-bold text-foreground uppercase tracking-tight">
                  {node.name}
                </p>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${node.progress}%` }}
                  />
                </div>
                <p className="mt-1 text-[9px] text-muted-foreground font-semibold">{node.modules}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
