import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-700 text-white">
      <div className="custom-container">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Hear what our clients have to say about their experience with
            Justice Law
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "The team at Justice Law provided exceptional guidance during a difficult corporate merger. Their expertise was invaluable.",
              author: "Robert Smith",
              company: "CEO, Smith Enterprises",
            },
            {
              quote:
                "I was facing serious charges and felt hopeless until I hired Justice Law. They fought tirelessly for my rights and got the case dismissed.",
              author: "Maria Garcia",
              company: "Client",
            },
            {
              quote:
                "During my divorce, the compassionate approach from Justice Law made a difficult time much more manageable. I'm grateful for their support.",
              author: "James Wilson",
              company: "Client",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};
