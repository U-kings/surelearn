import Image from "next/image";


import { ArrowRight } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";
import { FadeLeft, FadeRight } from "./animations";
import { Button } from "@workspace/ui/components/button";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeLeft delay={0.3}>
            <div className="space-y-8 wow animate__animated animate__fadeInLeft">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Empower your
                <br />
                institution with
                <br />
                <span className="text-teal-600">modern learning</span>
              </h1>

              <p className="text-muted-foreground text-lg leading-8 max-w-xl">
                The enterprise-grade LMS designed for clarity, scale and deep
                engagement. Streamline administration while delivering
                world-class educational experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Start Building Today
                  <ArrowRight size={18} />
                </Button>

                <Button size="lg" variant="outline">
                  Request a Demo
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-4">
                  <Image
                    alt="Avatar 1"
                    src="https://i.pravatar.cc/40?img=1"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-background"
                  />

                  <Image
                    alt="Avatar 2"
                    src="https://i.pravatar.cc/40?img=2"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-background"
                  />

                  <Image
                    alt="Avatar 3"
                    width={40}
                    height={40}
                    src="https://i.pravatar.cc/40?img=3"
                    className="rounded-full border-2 border-background"
                  />
                </div>

                <span className="text-muted-foreground">
                  Trusted by 500+ global institutions
                </span>
              </div>
            </div>
          </FadeLeft>

          <FadeRight delay={0.3}>
            <div className="wow animate__animated animate__fadeInRight">
              <DashboardMockup />
              {/* <Image
              src="/hero-dashboard.png"
              alt=""
              width={900}
              height={700}
              priority
              className="w-full rounded-3xl shadow-2xl"
            /> */}
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
