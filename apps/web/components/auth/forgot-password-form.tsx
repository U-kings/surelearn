// components/auth/forgot-password-form.tsx

"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Card, CardContent } from "@workspace/ui/components/card"

import { Button } from "@workspace/ui/components/button"

import { Input } from "@workspace/ui/components/input"

import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"

import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react"

import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "@/lib/validations/auth"

export default function ForgotPasswordForm() {
  const [emailSent, setEmailSent] = useState(false)

  const [isPending, startTransition] = useTransition()

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: ForgotPasswordFormValues) => {
    startTransition(async () => {
      // TODO:
      // await forgotPasswordAction(values);

      console.log(values)

      setEmailSent(true)
    })
  }

  if (emailSent) {
    return (
      <Card className="mx-auto w-full max-w-md rounded-3xl shadow-xl">
        <CardContent className="space-y-6 p-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2EAFB4]/10">
            <CheckCircle2 className="h-10 w-10 text-[#2EAFB4]" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">Check your email</h2>

            <p className="mt-3 text-muted-foreground">
              If an account exists, we've sent a password reset link.
            </p>
          </div>

          <Button className="h-12 w-full rounded-xl">
            <Link href="/login">Back to Login</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card className="mx-auto w-full max-w-md rounded-3xl shadow-xl">
      <CardContent className="p-8">
        <Link
          href="/login"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Login
        </Link>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#2EAFB4]/10">
            <Mail className="h-8 w-8 text-[#2EAFB4]" />
          </div>

          <h1 className="text-3xl font-bold">Forgot Password?</h1>

          <p className="mt-3 text-muted-foreground">
            Enter your email address and we'll send you a password reset link.
          </p>
        </div>

        {/* Form goes here */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email Address</FieldLabel>

                <FieldContent>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john@example.com"
                    className="h-12"
                  />

                  <FieldError>{fieldState.error?.message}</FieldError>
                </FieldContent>
              </Field>
            )}
          />

          <Button
            type="submit"
            disabled={isPending}
            className="h-12 w-full rounded-xl bg-[#2EAFB4] hover:bg-[#26989c]"
          >
            {isPending ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
