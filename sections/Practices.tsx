import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Practices = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="custom-container">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
            Our Practice Areas
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer comprehensive legal services across a wide range of
            practice areas
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Corporate Law",
              description:
                "Expert guidance for businesses of all sizes on formation, governance, and compliance.",
              icon: "📊",
            },
            {
              title: "Family Law",
              description:
                "Compassionate representation for divorce, custody, and other family matters.",
              icon: "👪",
            },
            {
              title: "Criminal Defense",
              description:
                "Aggressive defense strategies to protect your rights and freedom.",
              icon: "⚖️",
            },
            {
              title: "Real Estate Law",
              description:
                "Comprehensive legal services for all real estate transactions and disputes.",
              icon: "🏢",
            },
            {
              title: "Personal Injury",
              description:
                "Dedicated advocacy for victims of negligence to secure fair compensation.",
              icon: "🩹",
            },
            {
              title: "Estate Planning",
              description:
                "Thoughtful planning for your future with wills, trusts, and asset protection.",
              icon: "📝",
            },
          ].map((area, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 text-3xl">{area.icon}</div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  {area.title}
                </h3>
                <p className="mt-2 text-gray-600">{area.description}</p>
                <Link
                  href={`/practice-areas/${area.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-navy-700 text-navy-700 hover:bg-navy-50"
          >
            View All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
};
