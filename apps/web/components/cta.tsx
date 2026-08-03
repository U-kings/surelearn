"use client";

import { ArrowRight } from "lucide-react";
import { FadeUp } from "./animations";
import { Button } from "@workspace/ui/components/button";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-cyan-800 via-cyan-700 to-cyan-800 px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
          {/* <div className="relative overflow-hidden rounded-[2rem] bg-cyan-800 px-6 py-20 md:px-12 lg:px-20 lg:py-28"> */}
          {/* Decorative Blobs */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute left-20 top-16 h-16 w-16 rounded-full bg-white/10" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-4xl text-center">
            <FadeUp delay={0.3}>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Ready to modernize your
                <br className="hidden sm:block" />
                educational infrastructure?
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p
                className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100 md:text-xl"
                data-wow-delay=".2s"
              >
                Join hundreds of forward-thinking institutions who trust
                SureLearn for their mission-critical learning needs.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                data-wow-delay=".4s"
              >
                <Button
                  size="lg"
                  className="h-14 min-w-55 bg-slate-900 text-lg text-white hover:bg-slate-800"
                >
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 min-w-55 border-white/20 bg-white/10 text-lg text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                >
                  Talk to an Expert
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
