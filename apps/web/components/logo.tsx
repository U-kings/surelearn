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
              className="h-auto w-5/6 lg:w-auto"
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
              className="h-auto w-5/6 lg:w-auto"
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
              className="block h-auto w-5/6 lg:w-auto dark:hidden"
            />
            <Image
              src="/surelearn-logo-light.png"
              alt="Surelearn Logo"
              width={170}
              height={24}
              loading="eager"
              className="hidden h-auto w-5/6 lg:w-auto dark:block"
            />
          </>
        )}
      </div>

      {/* <span className="text-xl font-bold">SureLearn</span> */}
    </Link>
  )
}
