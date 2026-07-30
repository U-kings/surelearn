"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { FadeUp } from "./animations";

export default function Testimonial() {
  return (
    <section className="bg-[#0F2033] py-20 md:py-28 lg:py-36">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Stars */}
          <div
            className="wow animate__animated animate__fadeInDown mb-8 flex items-center gap-1"
            data-wow-duration="1s"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-8 w-8 fill-teal-400 text-teal-400"
              />
            ))}
          </div>

          {/* Quote */}
          <FadeUp delay={0.3}>
            <blockquote
              className="wow animate__animated animate__fadeInUp max-w-4xl text-xl leading-9 text-slate-100 md:text-2xl md:leading-10"
              data-wow-delay=".2s"
            >
              &quot;SureLearn has fundamentally transformed how our faculty
              delivers content. The transition from legacy systems was seamless,
              and student engagement metrics increased by 40% in the first
              semester alone. It&apos;s the gold standard for institutional
              learning.&quot;
            </blockquote>
          </FadeUp>

          {/* Avatar */}
          <div
            className="wow animate__animated animate__zoomIn mt-10"
            data-wow-delay=".4s"
          >
            <div className="rounded-full border-2 border-teal-400 p-1">
              <Image
                src="/testimonial-avatar.png"
                alt="Dr. Aris Thorne"
                width={84}
                height={84}
                className="rounded-full object-cover w-18 h-18"
              />
            </div>
          </div>

          {/* Name */}
          <FadeUp delay={0.3}>
            <h3
              className="wow animate__animated animate__fadeInUp mt-6 text-2xl font-medium text-white"
              data-wow-delay=".5s"
            >
              Dr. Aris Thorne
            </h3>
          </FadeUp>

          {/* Position */}
          <FadeUp delay={0.3}>
            <p
              className="wow animate__animated animate__fadeInUp mt-2 text-sm font-medium uppercase tracking-[0.28em] text-teal-400 md:text-lg"
              data-wow-delay=".6s"
            >
              Dean of Innovation, Global University
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
