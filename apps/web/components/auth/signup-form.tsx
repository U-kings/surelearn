"use client"

import Link from "next/link"
import { useTransition } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"

import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"

import { toast } from "@workspace/ui/components/toast"

import { signupSchema, type SignupFormValues } from "@/lib/validations/auth"
import PasswordInput from "./password-input"
import PasswordStrength from "./password-strength"

export default function SignupForm() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  })

  const password = useWatch({
    control: form.control,
    name: "password",
  })

  return (
    <>
      <Card className="rounded-3xl shadow-xl">
        <CardContent className="p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Create Your Account</h2>

            <p className="mt-2 text-muted-foreground">
              Start your learning journey today.
            </p>
          </div>

          <FieldGroup className="grid gap-4 md:grid-cols-1">

            <div className="grid gap-4 md:grid-cols-2">

            <Controller
              control={form.control}
              name="firstName"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>First Name</FieldLabel>

                  <FieldContent>
                    <Input {...field} placeholder="John" />

                    <FieldError>{fieldState.error?.message}</FieldError>
                  </FieldContent>
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Last Name</FieldLabel>

                  <FieldContent>
                    <Input {...field} placeholder="Doe" />

                    <FieldError>{fieldState.error?.message}</FieldError>
                  </FieldContent>
                </Field>
              )}
            />
              </div>

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
                    />

                    <FieldError>{fieldState.error?.message}</FieldError>
                  </FieldContent>
                </Field>
              )}
            />

            <PasswordInput control={form.control} name="password" />

            <PasswordStrength password={password ?? ""} />

            <PasswordInput
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
            />

            <Controller
              control={form.control}
              name="terms"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />

                    <FieldContent>
                      <FieldLabel className="leading-6 font-normal">
                        I agree to the Terms of Service and Privacy Policy.
                      </FieldLabel>

                      <FieldError>{fieldState.error?.message}</FieldError>
                    </FieldContent>
                  </div>
                </Field>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className="h-12 w-full rounded-xl bg-[#2EAFB4]"
            >
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-[#2EAFB4] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </FieldGroup>
        </CardContent>
      </Card>
    </>
  )
}
