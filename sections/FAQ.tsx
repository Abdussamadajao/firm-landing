import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="custom-container">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about legal processes and our
            services
          </p>
        </div>
        <div className="mx-auto max-w-3xl divide-y rounded-lg border">
          {[
            {
              question: "How do I know if I need a lawyer?",
              answer:
                "If you're facing a legal issue that could impact your rights, finances, or freedom, it's advisable to consult with an attorney. Many law firms, including ours, offer free initial consultations to help you determine if legal representation is necessary for your situation.",
            },
            {
              question: "How much will legal representation cost?",
              answer:
                "Legal fees vary depending on the complexity of your case, the attorney's experience, and the billing structure (hourly rates, flat fees, or contingency fees). During your initial consultation, we'll discuss fee structures and provide a clear understanding of potential costs.",
            },
            {
              question: "How long will my case take?",
              answer:
                "The duration of legal proceedings varies widely based on the type of case, court schedules, and complexity of the issues involved. Some matters can be resolved in weeks, while others may take months or even years. Your attorney will provide a timeline estimate based on your specific circumstances.",
            },
            {
              question:
                "What should I bring to my first meeting with a lawyer?",
              answer:
                "Bring any documents relevant to your case, such as contracts, correspondence, police reports, medical records, or court papers. Also prepare a chronological summary of events and a list of questions you want to ask. This helps your attorney understand your situation more quickly and thoroughly.",
            },
            {
              question: "Can I switch lawyers if I'm not satisfied?",
              answer:
                "Yes, you have the right to change legal representation at any time. However, it's important to consider timing and potential delays this might cause in your case. If you have concerns about your current representation, we recommend discussing them with your attorney first to see if issues can be resolved.",
            },
          ].map((faq, index) => (
            <div key={index} className="p-6">
              <h3 className="font-serif text-lg font-medium text-navy-700">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
          >
            View All FAQs
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
