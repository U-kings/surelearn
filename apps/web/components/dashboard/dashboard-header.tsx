"use client";

import {
  Bell,
  Menu,
  Search,
  Sun,
  Moon,
} from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group";

import { useTheme } from "next-themes";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center border-b bg-white/90 px-4 backdrop-blur-xl dark:bg-slate-950/90 sm:px-6 lg:px-8">
      <div className="flex w-full items-center gap-4">
        {/* Mobile menu */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search */}
        <div className="hidden max-w-md flex-1 sm:block">
          <InputGroup className="h-10 rounded-xl bg-muted/50">
            <InputGroupAddon>
              <Search className="h-4 w-4" />
            </InputGroupAddon>

            <InputGroupInput
              placeholder="Search courses..."
              className="border-0 bg-transparent shadow-none focus-visible:ring-0"
            />
          </InputGroup>
        </div>

        <div className="ml-auto flex items-center gap-1">
          {/* Theme */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl"
            onClick={() =>
              setTheme(
                resolvedTheme === "dark"
                  ? "light"
                  : "dark",
              )
            }
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-xl"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#2EAFB4]" />
          </Button>

          {/* Avatar */}
          <Button
            variant="ghost"
            className="ml-1 h-10 rounded-xl px-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2EAFB4]/10 text-xs font-semibold text-[#2EAFB4]">
              JD
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}