import { Button } from "@/components/ui/button";

import React from "react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[url(//placeholder.svg?height=800&width=1200)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-700/80" />

      <div className="custom-container relative z-10 flex h-full items-center text-white">
        <div className="max-w-3xl py-20 md:py-32">
          <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Committed to Justice, <br />
            Dedicated to Results
          </h1>

          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            Our experienced attorneys provide exceptional legal representation
            with integrity and personalized attention to every client.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium cursor-pointer"
              aria-label="Schedule a legal consultation"
            >
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 cursor-pointer"
              aria-label="Learn about our legal practice areas"
            >
              Learn About Our Practice Areas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
