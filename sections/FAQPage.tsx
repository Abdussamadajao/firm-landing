"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Import or define your FAQ data type
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const faqCategories = [
    {
      category: "General",
      questions: [
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
          question: "What should I bring to my first meeting with a lawyer?",
          answer:
            "Bring any documents relevant to your case, such as contracts, correspondence, police reports, medical records, or court papers. Also prepare a chronological summary of events and a list of questions you want to ask. This helps your attorney understand your situation more quickly and thoroughly.",
        },
        {
          question: "Can I switch lawyers if I'm not satisfied?",
          answer:
            "Yes, you have the right to change legal representation at any time. However, it's important to consider timing and potential delays this might cause in your case. If you have concerns about your current representation, we recommend discussing them with your attorney first to see if issues can be resolved.",
        },
      ],
    },
    {
      category: "Corporate Law",
      questions: [
        {
          question: "What business structure is best for my company?",
          answer:
            "The optimal business structure depends on various factors including liability protection, tax considerations, management flexibility, and future growth plans. Common options include sole proprietorships, partnerships, LLCs, and corporations. Our corporate attorneys can help you evaluate these options based on your specific business goals and circumstances.",
        },
        {
          question: "When should my business consider a merger or acquisition?",
          answer:
            "Mergers and acquisitions should be considered when they align with your strategic goals, such as expanding market share, acquiring new technologies or talent, diversifying offerings, or achieving economies of scale. Our M&A team can help evaluate potential opportunities and guide you through the complex process.",
        },
        {
          question: "How can I protect my business from legal disputes?",
          answer:
            "Preventative measures include having well-drafted contracts, clear policies and procedures, proper corporate governance, regulatory compliance programs, and adequate insurance coverage. Regular legal audits can also identify and address potential issues before they escalate into disputes.",
        },
      ],
    },
    {
      category: "Family Law",
      questions: [
        {
          question: "How is child custody determined?",
          answer:
            "Courts determine custody based on the best interests of the child, considering factors such as each parent's relationship with the child, ability to provide care, the child's established routine, and sometimes the child's preferences (depending on age). Courts generally favor arrangements that allow children to maintain relationships with both parents when possible.",
        },
        {
          question: "How is property divided in a divorce?",
          answer:
            "Property division depends on state law. In community property states, marital assets are typically divided equally. In equitable distribution states, assets are divided fairly but not necessarily equally, based on factors such as the length of marriage, each spouse's financial situation, and contributions to the marriage. Separate property acquired before marriage or by gift/inheritance usually remains with the original owner.",
        },
        {
          question:
            "What's the difference between legal separation and divorce?",
          answer:
            "Legal separation involves living apart while remaining legally married. It requires a court order that outlines rights and responsibilities, similar to a divorce. Unlike divorce, legal separation doesn't end the marriage, so neither party can remarry. Some choose separation for religious reasons, to maintain health insurance benefits, or as a trial period before deciding on divorce.",
        },
      ],
    },
    {
      category: "Personal Injury",
      questions: [
        {
          question: "How long do I have to file a personal injury claim?",
          answer:
            "The statute of limitations for personal injury claims varies by state, typically ranging from 1-6 years from the date of injury. However, certain circumstances can extend or shorten this timeframe. It's crucial to consult with an attorney as soon as possible after an injury to ensure your claim is filed within the applicable deadline.",
        },
        {
          question: "What compensation can I receive for a personal injury?",
          answer:
            "Potential compensation includes economic damages (medical expenses, lost wages, property damage), non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life), and sometimes punitive damages (in cases of extreme negligence or intentional harm). The specific compensation available depends on the circumstances of your case and applicable state laws.",
        },
        {
          question: "Should I accept the insurance company's settlement offer?",
          answer:
            "It's generally not advisable to accept an initial settlement offer without legal consultation. Insurance companies typically offer the minimum amount possible, often before the full extent of injuries and long-term impacts are known. An experienced personal injury attorney can evaluate whether an offer is fair based on your specific injuries, damages, and applicable law.",
        },
      ],
    },
    {
      category: "Estate Planning",
      questions: [
        {
          question: "Do I need a will if I don't have many assets?",
          answer:
            "Yes, having a will is important regardless of your asset level. A will allows you to designate who receives your possessions, nominate guardians for minor children, and name an executor to handle your affairs. Without a will, state intestacy laws determine how your assets are distributed, which may not align with your wishes.",
        },
        {
          question: "What's the difference between a will and a trust?",
          answer:
            "A will takes effect after death and goes through probate court, becoming public record. It directs asset distribution and can name guardians for minor children. A trust takes effect immediately upon creation, avoids probate, remains private, and can manage assets during incapacity. Trusts offer more control over how and when beneficiaries receive assets and can include provisions for long-term care.",
        },
        {
          question: "How often should I update my estate plan?",
          answer:
            "You should review your estate plan every 3-5 years and after major life events such as marriage, divorce, birth of children, significant changes in assets, moving to a different state, or changes in tax laws. Regular reviews ensure your plan continues to reflect your current wishes and circumstances.",
        },
      ],
    },
  ];

  const filteredCategories = useMemo(() => {
    return faqCategories
      .filter((category) =>
        selectedCategory ? category.category === selectedCategory : true
      )
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((category) => category.questions.length > 0);
  }, [faqCategories, selectedCategory, searchQuery]);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-700 py-16 md:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy-800 to-navy-600" />
        <div className="custom-container relative z-10  text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              Find answers to common questions about legal processes and our
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b">
        <div className="custom-container">
          <div className="">
            <div className="relative">
              <label htmlFor="search" className="sr-only">
                Search for answers
              </label>
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <Input
                id="search"
                placeholder="Search for answers..."
                className="pl-10 py-6 text-lg border-gray-300 focus:border-navy-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-gray-50">
        <div className="custom-container">
          <div className="flex flex-wrap justify-center gap-3">
            <Badge
              onClick={() => setSelectedCategory(null)}
              className={`cursor-pointer px-4 py-2 transition-colors ${
                !selectedCategory
                  ? "bg-navy-700 text-white hover:bg-navy-800"
                  : "hover:bg-navy-100"
              }`}
            >
              All
            </Badge>
            {faqCategories.map((category) => (
              <Badge
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`cursor-pointer px-4 py-2 transition-colors ${
                  selectedCategory === category.category
                    ? "bg-navy-700 text-white hover:bg-navy-800"
                    : "hover:bg-navy-100"
                }`}
              >
                {category.category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-4xl">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No results found matching your criteria.
                </p>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div key={category.category} className="mb-12">
                  <h2 className="font-serif text-2xl font-bold text-navy-700 mb-6 flex items-center">
                    <span className="bg-navy-50 text-navy-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                    {category.category} Questions
                  </h2>

                  <div className="space-y-4">
                    {category.questions.map((faq) => (
                      <div
                        key={faq.question}
                        className="rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                      >
                        <details className="group">
                          <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-6 text-lg font-medium text-navy-700 hover:bg-gray-50 transition-colors">
                            {faq.question}
                            <span className="transition-transform group-open:rotate-180">
                              <ChevronDown className="h-5 w-5" />
                            </span>
                          </summary>
                          <div className="border-t border-gray-200 bg-gray-50 p-6">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our team is here to provide the answers and guidance you need.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Contact Us Directly
                </h3>
                <p className="mt-2 text-gray-600">
                  Speak with our team to get answers to your specific questions.
                </p>
                <Button
                  asChild
                  className="mt-4 w-full bg-navy-700 hover:bg-navy-800"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Schedule a Consultation
                </h3>
                <p className="mt-2 text-gray-600">
                  Meet with an attorney to discuss your specific legal needs.
                </p>
                <Button
                  asChild
                  className="mt-4 w-full bg-gold-500 hover:bg-gold-600 text-navy-900"
                >
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Additional Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our legal guides and resources for more in-depth
              information.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 shadow-md">
              <h3 className="font-serif text-xl font-bold text-navy-700">
                Legal Guides
              </h3>
              <p className="mt-2 text-gray-600">
                Comprehensive guides on various legal topics to help you
                understand your rights and options.
              </p>
              <Link
                href="/resources/guides"
                className="mt-4 inline-flex items-center text-gold-600 hover:text-gold-700"
              >
                Browse Guides
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 shadow-md">
              <h3 className="font-serif text-xl font-bold text-navy-700">
                Legal Glossary
              </h3>
              <p className="mt-2 text-gray-600">
                Definitions of common legal terms to help you better understand
                legal documents and proceedings.
              </p>
              <Link
                href="/resources/glossary"
                className="mt-4 inline-flex items-center text-gold-600 hover:text-gold-700"
              >
                View Glossary
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 shadow-md">
              <h3 className="font-serif text-xl font-bold text-navy-700">
                Blog Articles
              </h3>
              <p className="mt-2 text-gray-600">
                Informative articles on current legal topics, case studies, and
                legal news.
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center text-gold-600 hover:text-gold-700"
              >
                Read Our Blog
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
