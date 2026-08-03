"use client"

import { cn } from "@workspace/ui/lib/utils"
import { motion } from "motion/react"
import { ReactNode } from "react"

export function FadeUp({
  children,
  delay = 0,
  className = "",
  ...props
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeDown({
  children,
  delay = 0,
  className = "",
  ...props
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeLeft({
  children,
  delay = 0,
  className = "",
  ...props
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeRight({
  children,
  delay = 0,
  className = "",
  ...props
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ZoomIn({
  children,
  delay = 0,
  className = "",
  ...props
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
