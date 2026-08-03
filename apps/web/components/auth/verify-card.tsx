"use client"

import { MailCheck } from "lucide-react"

import { Card, CardContent } from "@workspace/ui/components/card"

import OtpInput from "./otp-input"
import ResendButton from "./resend-button"
import { Button } from "@workspace/ui/components/button"

export default function VerifyCard() {
  return (
    <Card className="w-full max-w-md rounded-3xl shadow-xl">
      <CardContent className="space-y-8 p-8">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#2EAFB4]/10">
            <MailCheck className="h-8 w-8 text-[#2EAFB4]" />
          </div>

          <h1 className="text-3xl font-bold">Verify your email</h1>

          <p className="mt-3 text-muted-foreground">
            We&apos;ve sent a 6-digit verification code to
          </p>

          <p className="font-medium">john@example.com</p>
        </div>

        <OtpInput />

        <Button className="h-12 w-full rounded-xl bg-[#2EAFB4]">
          Verify Email
        </Button>

        <ResendButton />
      </CardContent>
    </Card>
  )
}
