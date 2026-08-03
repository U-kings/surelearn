// app/actions/auth/login.ts

"use server"

import { loginSchema, type SignupFormValues } from "@/lib/validations/auth"

export async function signupAction(values: SignupFormValues) {
  const parsed = loginSchema.safeParse(values)

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Please correct the highlighted fields.",
    }
  }

  // Authenticate user here
  // Example:
  // const user = await auth.login(parsed.data);

  return {
    success: true,
    message: "Your account has been successfully created!",
  }
}
