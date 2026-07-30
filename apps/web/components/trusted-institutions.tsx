import React from "react";
import { FadeUp } from "./animations";

const institutions = [
  "STAMFORD",
  "OXBRIDGE",
  "HARVARD",
  "LUMIÈRE",
  "ETH ZÜRICH",
];

export default function TrustedInstitutions() {
  return (
    <section className="relative overflow-hidden border-y bg-muted/20">
      {/* <section className="border-y bg-background"> */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.08),transparent_60%)]" />

      <div className="relative container mx-auto px-6 py-14">
        <div className="container mx-auto px-6 py-14">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase text-muted-foreground">
              The Infrastructure for World-Class Learning
            </p>
          </div>

          {/* Logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 lg:gap-x-20">
            {institutions.map((school, index) => (
              <FadeUp key={school} delay={index * 0.15}>
                {/* <FadeUp key={school} delay={0.3}> */}
                <div
                  key={school}
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-500 dark:text-slate-400 transition-colors hover:text-primary">
                    {school}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
