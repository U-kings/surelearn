"use client"

import Image from "next/image"
import {
  BarChart3,
  ShieldCheck,
  Video,
  FolderCog,
  CheckCircle2,
} from "lucide-react"
import { FadeLeft, FadeRight, FadeUp } from "./animations"
import { AnalyticsMockup } from "./analytics-mockup"

const analyticsFeatures = ["Predictive grading outcomes", "Engagement heatmaps"]

export default function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <FadeUp delay={0.3}>
          <div className="wow animate__animated animate__fadeInUp mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Precision-engineered for Educators
            </h2>

            <p className="mt-5 text-lg text-muted-foreground">
              Replace fragmented tools with a single, elegant platform that
              handles everything from enrollment to automated grading.
            </p>
          </div>
        </FadeUp>

        {/* Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Large Card */}
          <FadeLeft
            delay={0.3}
            className="wow animate__animated animate__fadeInLeft rounded-2xl border bg-background p-8 lg:col-span-2"
          >
            <div>
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                    <BarChart3 className="h-7 w-7" />
                  </div>

                  <h3 className="text-3xl font-semibold">
                    Advanced Student Analytics
                  </h3>

                  <p className="mt-6 text-lg leading-7 text-muted-foreground">
                    Real-time behavioral insights and predictive modeling.
                    Identify at-risk students before they fall behind with
                    automated intervention triggers.
                  </p>

                  <div className="mt-4 space-y-1">
                    {analyticsFeatures.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-lg"
                      >
                        <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <AnalyticsMockup /> */}
                <Image
                  src="/analytics-dashboard.png"
                  alt="Analytics"
                  width={900}
                  height={700}
                  className="rounded-xl border shadow-lg"
                />
              </div>
            </div>
          </FadeLeft>

          {/* Card 2 */}
          <FadeRight
            delay={0.3}
            className="wow animate__animated animate__fadeInRight rounded-2xl border bg-background p-8"
          >
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="text-3xl font-semibold">Secure Onboarding</h3>

              <p className="mt-6 text-lg leading-7 text-muted-foreground">
                Enterprise SSO integration with SAML and OAuth support.
                One-click migration for entire institutional databases.
              </p>
            </div>
          </FadeRight>

          {/* Card 3 */}
          <FadeUp
            delay={0.3}
            className="wow animate__animated animate__fadeInUp rounded-2xl border bg-background p-8"
          >
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                <Video className="h-7 w-7" />
              </div>

              <h3 className="text-3xl font-semibold">Live Classes</h3>

              <p className="mt-6 text-lg leading-7 text-muted-foreground">
                Low-latency 4K streaming integrated directly into the course
                workflow. No external apps required for high-bandwidth lectures.
              </p>
            </div>
          </FadeUp>

          <FadeUp
            delay={0.3}
            className="wow animate__animated animate__fadeInUp rounded-2xl border bg-background p-8 lg:col-span-2"
          >
            <div className="grid gap-1 lg:grid-cols-2 lg:items-center">
              {/* Card 4 */}
              {/* <FadeUp delay={0.3}> */}
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                  <FolderCog className="h-7 w-7" />
                </div>

                <h3 className="text-3xl font-semibold">
                  Unified Course Builder
                </h3>

                <p className="mt-6 text-lg leading-7 text-muted-foreground">
                  A drag-and-drop experience that allows professors to build
                  modular curriculums with embedded quizzes, media, and peer
                  review sections in minutes.
                </p>
              </div>
              {/* </FadeUp> */}

              {/* Builder Preview */}
              {/* <FadeUp delay={0.3}>
                <div className="rounded-2xl border bg-background p-8 wow animate__animated animate__fadeInUp"> */}
              <div className="space-y-3 rounded-xl border bg-muted/30 p-5">
                <div className="rounded-md border bg-background p-4 font-medium">
                  ☷ Module 1: Introduction to Bio-Chemistry
                </div>

                <div className="rounded-md border-2 border-cyan-300 bg-cyan-50 p-4 dark:bg-cyan-900/20">
                  📝 Quiz: Atomic Structure
                </div>

                <div className="rounded-md border bg-background p-4 text-muted-foreground">
                  ▶ Lecture Video: Bonding
                </div>
              </div>
              {/* </div>
              </FadeUp> */}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
