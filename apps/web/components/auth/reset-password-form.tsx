"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Card, CardContent } from "@workspace/ui/components/card"

import { Button } from "@workspace/ui/components/button"

import { KeyRound } from "lucide-react"

import PasswordInput from "./password-input"
import PasswordStrength from "./password-strength"

import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from "@/lib/validations/auth"

import React from "react"
import { useWatch } from "react-hook-form"

export default function ResetPasswordForm() {
  const [isPending, startTransition] = useTransition()

  const [success, setSuccess] = useState(false)

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),

    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const password = useWatch({
    control: form.control,
    name: "password",
  })

  const onSubmit = (values: ResetPasswordFormValues) => {
    startTransition(async () => {
      console.log(values)

      // await resetPasswordAction(values);

      setSuccess(true)
    })
  }

  if (success) {
    return (
      <Card className="mx-auto w-full max-w-md rounded-3xl shadow-xl">
        <CardContent className="space-y-6 p-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <KeyRound className="h-10 w-10 text-green-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">Password Updated</h2>

            <p className="mt-2 text-muted-foreground">
              Your password has been changed successfully.
            </p>
          </div>

          <Button className="h-12 w-full rounded-xl">
            <Link href="/login">Continue to Login</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }
  return (
    <>
      <Card className="mx-auto w-full max-w-md rounded-3xl shadow-xl">
        <CardContent className="p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#2EAFB4]/10">
              <KeyRound className="h-8 w-8 text-[#2EAFB4]" />
            </div>

            <h1 className="text-3xl font-bold">Reset Password</h1>

            <p className="mt-3 text-muted-foreground">
              Create a new secure password for your account.
            </p>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <PasswordInput
              control={form.control}
              name="password"
              label="New Password"
            />

            <PasswordStrength password={password ?? ""} />

            <PasswordInput
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
            />

            <Button
              type="submit"
              disabled={isPending}
              className="h-12 w-full rounded-xl bg-[#2EAFB4] hover:bg-[#26989c]"
            >
              {isPending ? "Updating..." : "Update Password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
