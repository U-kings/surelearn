import CTA from "@/components/cta"
import Features from "@/components/features"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Testimonial from "@/components/testimonial"
import TrustedInstitutions from "@/components/trusted-institutions"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <main className="min-h-screen bg-white transition-colors dark:bg-[#0f172a]">
      <Navbar />
      <Hero />
      <TrustedInstitutions />
      {/* <Features /> */}
      <Testimonial />
      <CTA />
      <Footer />
    </main>
    // <div className="flex min-h-svh p-6">
    //   <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
    //     <div>
    //       <h1 className="font-medium">Project ready!</h1>
    //       <p>You may now add components and start building.</p>
    //       <p>We&apos;ve already added the button component for you.</p>
    //       <Button className="mt-2">Button</Button>
    //     </div>
    //     <div className="text-muted-foreground font-mono text-xs">
    //       (Press <kbd>d</kbd> to toggle dark mode)
    //     </div>
    //   </div>
    // </div>
  )
}
