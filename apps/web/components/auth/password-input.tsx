"use client"

import * as React from "react"
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { Eye, EyeOff, Lock } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"

import { cn } from "@workspace/ui/lib/utils"

interface PasswordInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>
  name: TName
  label?: string
  placeholder?: string
  description?: string
  className?: string
}

export default function PasswordInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  label = "Password",
  placeholder = "Enter your password",
  className,
}: PasswordInputProps<TFieldValues, TName>) {
  const [show, setShow] = React.useState(false)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <FieldContent>
            <div className="relative">
              <Lock className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                {...field}
                value={field.value ?? ""}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                className={cn("h-12 rounded-4xl pr-12 pl-11", className)}
              />
              <div className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShow(!show)}
                  className="pointer-events-auto "
                >
                  {show ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <FieldError>{fieldState.error?.message}</FieldError>
          </FieldContent>
        </Field>
      )}
    />
  )
}
