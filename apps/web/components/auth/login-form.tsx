"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { motion } from "motion/react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { ShieldCheck } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Checkbox } from "@workspace/ui/components/checkbox"

import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
  FieldGroup,
} from "@workspace/ui/components/field"

import { Card, CardContent } from "@workspace/ui/components/card"
import { toast } from "@workspace/ui/components/toast"

import {
  LoginFormValues,
  loginSchema,
  type LoginSchema,
} from "@/lib/validations/auth"
import PasswordField from "./password-input"
import { useRouter } from "next/navigation"
import { loginAction } from "@/app/actions/auth/login"
import PasswordInput from "./password-input"

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  const onSubmit = (values: LoginFormValues) => {
    startTransition(async () => {
      const formData = new FormData()

      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, String(value))
      })

      const result = await loginAction(values)

      if (!result.success) {
        toast.add({ type: "error", description: result.message })

        if (result.errors?.email) {
          form.setError("email", {
            message: result.errors.email[0],
          })
        }

        if (result.errors?.password) {
          form.setError("password", {
            message: result.errors.password[0],
          })
        }

        return
      }

      toast.add({ type: "success", description: result.message })

      router.replace("/dashboard")
    })
  }
  // try {
  //   setLoading(true)

  //   console.log(values)

  //   // TODO:
  //   // await login(values)
  // } finally {
  //   setLoading(false)
  // }

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 25 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5, delay: 0.2 }}
    //   className="mx-auto w-full max-w-md"
    // >
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Card className="rounded-3xl border-white/30 bg-background/80 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10">
        <CardContent className="p-8 sm:p-10">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Welcome Back 👋
            </h2>

            <p className="mt-2 text-muted-foreground">
              Sign in to continue your learning journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>

                <FieldContent>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...form.register("email")}
                    className="py-2"
                  />

                  <FieldError>
                    {form.formState.errors.email?.message}
                  </FieldError>
                </FieldContent>
              </Field>

              <Field>
                {/* <FieldContent> */}
                <PasswordInput control={form.control} name="password" />

                {/* <FieldError>
                    {form.formState.errors.password?.message}
                  </FieldError> */}
                {/* </FieldContent> */}
              </Field>
            </FieldGroup>

            <div className="flex items-center justify-between">
              <Field orientation="horizontal">
                <Checkbox
                  checked={form.watch("remember")}
                  onCheckedChange={(checked) =>
                    form.setValue("remember", !!checked)
                  }
                />

                <FieldContent>
                  <FieldLabel>Remember me</FieldLabel>
                </FieldContent>
              </Field>

              <Link
                href="/forgot-password"
                className="text-sm text-nowrap text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="h-12 w-full rounded-xl"
            >
              {isPending ? "Signing in..." : "Continue Learning"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs tracking-widest text-muted-foreground uppercase">
              New here?
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Request Access */}
          <Button variant="outline" className="h-11 w-full rounded-xl">
            <Link href="/signup">Request Access</Link>
            {/* <Link href="/request-access">Request Access</Link> */}
          </Button>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-[#2EAFB4]" />

            <span>Your data is encrypted and secure.</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
