// lib/validations/auth.ts

import { z } from "zod"

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  remember: z.boolean(),
})

export type LoginFormValues = z.input<typeof loginSchema>
export type LoginSchema = z.infer<typeof loginSchema>

export const signupSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters."),

    lastName: z.string().min(2, "Last name must be at least 2 characters."),

    email: z.email("Please enter a valid email address."),

    password: z.string().min(8, "Password must be at least 8 characters."),

    confirmPassword: z.string(),

    terms: z.boolean().refine((value) => value, {
      message: "You must accept the Terms & Conditions.",
    }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  })

export type SignupFormValues = z.infer<typeof signupSchema>

export const forgotPasswordSchema = z.object({
  email: z.email("Please enter a valid email address."),
})

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Must contain an uppercase letter.")
      .regex(/[a-z]/, "Must contain a lowercase letter.")
      .regex(/\d/, "Must contain a number."),

    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  })

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>
