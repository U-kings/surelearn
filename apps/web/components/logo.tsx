import { cn } from "@workspace/ui/lib/utils"
import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  className?: string
  mode?: "light" | "dark"
}

export function Logo({ className, mode }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="">
        {/* <div className="rounded-md bg-teal-700 p-2 text-white"> */}
        {/* <GraduationCap size={18} /> */}
        {mode === "light" ? (
          <>
            <Image
              src="/surelearn-logo-light.png"
              alt="Surelearn Logo"
              width={170}
              height={24}
              loading="eager"
              className={cn("h-auto w-5/6 lg:w-auto", className)}
            />
          </>
        ) : mode === "dark" ? (
          <>
            <Image
              src="/surelearn-logo-dark.png"
              alt="Surelearn Logo"
              width={170}
              height={24}
              loading="eager"
              className={cn("h-auto w-5/6 lg:w-auto", className)}
            />
          </>
        ) : (
          <>
            <Image
              src="/surelearn-logo-dark.png"
              alt="Surelearn Logo"
              width={170}
              height={24}
              loading="eager"
              className={cn(
                "block h-auto w-5/6 lg:w-auto dark:hidden",
                className
              )}
            />
            <Image
              src="/surelearn-logo-light.png"
              alt="Surelearn Logo"
              width={170}
              height={24}
              loading="eager"
              className={cn(
                "hidden h-auto w-5/6 lg:w-auto dark:block",
                className
              )}
            />
          </>
        )}
      </div>

      {/* <span className="text-xl font-bold">SureLearn</span> */}
    </Link>
  )
}
