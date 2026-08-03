"use client"

import { cn } from "@workspace/ui/lib/utils"
import { Check, X } from "lucide-react"

interface Props {
  password: string
}

export default function PasswordStrength({ password }: Props) {
  const checks = [
    {
      label: "8+ characters",
      valid: password.length >= 8,
    },
    {
      label: "Uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "Lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "Number",
      valid: /\d/.test(password),
    },
    {
      label: "Special character",
      valid: /[^A-Za-z0-9]/.test(password),
    },
  ]

  const score = checks.filter((c) => c.valid).length

  return (
    <div className="mt-0 space-y-2">
      {/* {checks.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-sm">
          {item.valid ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <X className="h-4 w-4 text-muted-foreground" />
          )}

          <span>{item.label}</span>
        </div>
      ))} */}
      <div className="mt-1 mb-2 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            score <= 2 && "w-1/4 bg-red-500",
            score === 3 && "w-2/4 bg-yellow-500",
            score === 4 && "w-3/4 bg-blue-500",
            score === 5 && "w-full bg-green-500"
          )}
        />
      </div>
    </div>
  )
}
