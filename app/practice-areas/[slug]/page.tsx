import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// This would typically come from a CMS or API in a real application
const getPracticeAreaData = (slug: string) => {
  const practiceAreas = [
    {
      title: "Corporate Law",
      description:
        "Our corporate law practice provides comprehensive legal services to businesses of all sizes, from startups to multinational corporations. We assist with entity formation, governance, compliance, mergers and acquisitions, and general business matters.",
      longDescription: `
        <p>At Justice Law, our Corporate Law practice is dedicated to helping businesses navigate the complex legal landscape at every stage of their development. Our experienced attorneys provide strategic counsel that aligns with your business objectives while ensuring legal compliance and risk management.</p>
        
        <p>Whether you're a startup seeking guidance on entity formation, an established business facing regulatory challenges, or a corporation planning a merger or acquisition, our team has the expertise to help you achieve your goals efficiently and effectively.</p>
        
        <h2>Our Approach</h2>
        <p>We take a proactive and business-minded approach to corporate law. We understand that legal decisions impact your bottom line, so we focus on providing practical solutions that protect your interests while supporting your business strategy. Our attorneys work closely with you to understand your industry, business model, and objectives, allowing us to tailor our services to your specific needs.</p>
      `,
      icon: "📊",
      image: "/placeholder.svg?height=800&width=1200",
      services: [
        {
          name: "Business Formation & Entity Selection",
          description:
            "Strategic guidance on choosing the right business structure (LLC, corporation, partnership) based on liability protection, tax considerations, management flexibility, and growth plans.",
        },
        {
          name: "Corporate Governance",
          description:
            "Development of bylaws, operating agreements, and corporate policies; guidance on board responsibilities, shareholder rights, and compliance with governance requirements.",
        },
        {
          name: "Mergers & Acquisitions",
          description:
            "Comprehensive representation throughout the M&A process, including due diligence, transaction structuring, negotiation, documentation, and post-closing integration.",
        },
        {
          name: "Contract Drafting & Negotiation",
          description:
            "Creation, review, and negotiation of various business contracts, including service agreements, vendor contracts, licensing agreements, and employment contracts.",
        },
        {
          name: "Regulatory Compliance",
          description:
            "Guidance on compliance with federal, state, and industry-specific regulations; development of compliance programs and policies to mitigate legal risks.",
        },
        {
          name: "Corporate Finance",
          description:
            "Assistance with capital raising, including private placements, venture capital financing, and debt financing; securities law compliance.",
        },
        {
          name: "Joint Ventures & Strategic Alliances",
          description:
            "Structuring and documentation of joint ventures, strategic partnerships, and collaborative business arrangements.",
        },
        {
          name: "Intellectual Property Protection",
          description:
            "Strategic advice on protecting and leveraging intellectual property assets, including trademarks, copyrights, and trade secrets in the corporate context.",
        },
      ],
      attorneys: [
        {
          name: "Sarah Johnson",
          title: "Managing Partner",
          image: "/placeholder.svg?height=400&width=300",
          slug: "sarah-johnson",
        },
        {
          name: "Michael Chen",
          title: "Senior Partner",
          image: "/placeholder.svg?height=400&width=300",
          slug: "michael-chen",
        },
      ],
      faqs: [
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
      caseStudies: [
        {
          title: "Successful Tech Startup Acquisition",
          description:
            "Guided a technology startup through a $50 million acquisition by a larger industry player, handling due diligence, complex IP issues, and employee retention arrangements.",
        },
        {
          title: "Family Business Succession Planning",
          description:
            "Developed and implemented a comprehensive succession plan for a third-generation family business, ensuring smooth transition of ownership and management while minimizing tax implications.",
        },
        {
          title: "Corporate Restructuring",
          description:
            "Advised a mid-size manufacturing company on corporate restructuring to optimize tax efficiency and better position the company for future growth and potential acquisition.",
        },
      ],
      slug: "corporate-law",
    },
    {
      title: "Family Law",
      description:
        "Our family law attorneys provide compassionate representation during life's most challenging personal transitions. We handle divorce, child custody, support matters, adoption, and other family-related legal issues with sensitivity and expertise.",
      longDescription: `
        <p>The Family Law practice at Justice Law combines legal expertise with compassionate understanding to guide clients through some of life's most challenging personal transitions. We recognize that family legal matters involve not just legal issues but emotional ones as well.</p>
        
        <p>Our experienced family law attorneys approach each case with sensitivity, discretion, and a commitment to achieving the best possible outcome for you and your family. We focus on protecting your rights and interests while minimizing conflict and emotional stress whenever possible.</p>
        
        <h2>Our Approach</h2>
        <p>We believe in a client-centered approach to family law. We take the time to listen to your concerns, understand your goals, and develop a strategy tailored to your specific situation. Whether through negotiation, mediation, or litigation when necessary, we advocate vigorously for your interests while being mindful of the impact on family relationships, especially when children are involved.</p>
      `,
      icon: "👪",
      image: "/placeholder.svg?height=800&width=1200",
      services: [
        {
          name: "Divorce & Legal Separation",
          description:
            "Comprehensive representation in contested and uncontested divorces, including property division, spousal support, and post-divorce modifications.",
        },
        {
          name: "Child Custody & Visitation",
          description:
            "Advocacy for parenting arrangements that serve the best interests of the children while protecting your parental rights; assistance with custody modifications when circumstances change.",
        },
        {
          name: "Child & Spousal Support",
          description:
            "Calculation and negotiation of fair support arrangements; representation in support enforcement and modification proceedings.",
        },
        {
          name: "Property Division",
          description:
            "Strategic guidance on the equitable division of marital assets and debts, including complex property such as businesses, investments, and retirement accounts.",
        },
        {
          name: "Prenuptial & Postnuptial Agreements",
          description:
            "Drafting and review of marital agreements that protect assets, clarify financial responsibilities, and provide certainty in the event of divorce.",
        },
        {
          name: "Adoption",
          description:
            "Legal guidance through various types of adoption processes, including stepparent adoptions, agency adoptions, and international adoptions.",
        },
        {
          name: "Domestic Violence Protection",
          description:
            "Emergency assistance with protective orders; advocacy for victims of domestic violence in family court proceedings.",
        },
        {
          name: "Mediation & Collaborative Divorce",
          description:
            "Alternative dispute resolution options that can reduce conflict, costs, and time while allowing greater control over outcomes.",
        },
      ],
      attorneys: [
        {
          name: "Elena Rodriguez",
          title: "Partner, Head of Family Law",
          image: "/placeholder.svg?height=400&width=300",
          slug: "elena-rodriguez",
        },
      ],
      faqs: [
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
      caseStudies: [
        {
          title: "High-Asset Divorce Settlement",
          description:
            "Successfully negotiated a fair division of complex assets including multiple properties, business interests, and investment portfolios in a high-net-worth divorce case.",
        },
        {
          title: "International Child Custody Resolution",
          description:
            "Resolved a complex international child custody dispute involving multiple jurisdictions, securing a favorable arrangement that protected our client's parental rights.",
        },
        {
          title: "Collaborative Divorce Success",
          description:
            "Guided a couple through the collaborative divorce process, helping them reach an amicable settlement that prioritized their children's well-being while fairly dividing assets and establishing support.",
        },
      ],
      slug: "family-law",
    },
    {
      title: "Criminal Defense",
      description:
        "Our criminal defense team provides aggressive representation for clients facing charges ranging from misdemeanors to serious felonies. We protect your rights throughout the criminal justice process and work tirelessly to achieve the best possible outcome.",
      longDescription: `
        <p>The Criminal Defense practice at Justice Law is committed to protecting the rights, freedom, and future of individuals facing criminal charges. We understand that being accused of a crime can be a frightening and overwhelming experience, and we're here to provide the strong legal advocacy you need during this challenging time.</p>
        
        <p>Our experienced criminal defense attorneys have successfully represented clients in cases ranging from minor misdemeanors to serious felony charges. We bring a strategic, thorough, and aggressive approach to every case, fighting to protect your rights at every stage of the criminal justice process.</p>
        
        <h2>Our Approach</h2>
        <p>We believe that every person deserves a vigorous defense, regardless of the charges they face. Our approach begins with a comprehensive investigation of the facts, careful analysis of the evidence, and identification of procedural issues that could affect your case. We explore every possible defense strategy and work tirelessly to achieve the best possible outcome, whether that's dismissal of charges, acquittal at trial, or negotiation of favorable plea terms when appropriate.</p>
      `,
      icon: "⚖️",
      image: "/placeholder.svg?height=800&width=1200",
      services: [
        {
          name: "Felony & Misdemeanor Defense",
          description:
            "Representation for a wide range of criminal charges, from minor offenses to serious felonies, at both state and federal levels.",
        },
        {
          name: "DUI/DWI Defense",
          description:
            "Strategic defense against driving under the influence charges, including challenging evidence, field sobriety tests, and breathalyzer results.",
        },
        {
          name: "White Collar Crime",
          description:
            "Defense against allegations of fraud, embezzlement, insider trading, tax evasion, and other financial and business-related crimes.",
        },
        {
          name: "Drug Offenses",
          description:
            "Representation in cases involving possession, distribution, manufacturing, and trafficking of controlled substances.",
        },
        {
          name: "Violent Crime Defense",
          description:
            "Vigorous defense against charges such as assault, battery, domestic violence, robbery, and homicide.",
        },
        {
          name: "Federal Criminal Defense",
          description:
            "Specialized representation in federal criminal cases, which often involve more complex procedures and potentially severe penalties.",
        },
        {
          name: "Juvenile Defense",
          description:
            "Compassionate and effective representation for minors in the juvenile justice system, with a focus on rehabilitation and protecting future opportunities.",
        },
        {
          name: "Expungements & Record Sealing",
          description:
            "Assistance with clearing or sealing criminal records to minimize the long-term impact of past arrests or convictions on employment, housing, and other opportunities.",
        },
      ],
      attorneys: [
        {
          name: "Michael Chen",
          title: "Senior Partner",
          image: "/placeholder.svg?height=400&width=300",
          slug: "michael-chen",
        },
      ],
      faqs: [
        {
          question: "What should I do if I'm arrested?",
          answer:
            "If you're arrested, remember these crucial steps: 1) Remain calm and polite, 2) Exercise your right to remain silent beyond providing basic identifying information, 3) Clearly state that you want to speak with an attorney, 4) Do not consent to searches without a warrant, 5) Make no statements or decisions without legal counsel present, and 6) Contact a criminal defense attorney as soon as possible.",
        },
        {
          question:
            "Should I talk to the police if I haven't done anything wrong?",
          answer:
            "Even if you believe you've done nothing wrong, it's generally advisable to have an attorney present during police questioning. Innocent statements can be misinterpreted or taken out of context. Your attorney can help ensure your rights are protected and prevent you from inadvertently saying something that could be harmful to your case.",
        },
        {
          question: "What's the difference between a felony and a misdemeanor?",
          answer:
            "Misdemeanors are less serious crimes typically punishable by up to one year in a local jail, fines, probation, or community service. Felonies are more serious offenses that can result in imprisonment for more than one year in state or federal prison, substantial fines, and long-term consequences including loss of certain civil rights. The specific classification and penalties vary by jurisdiction.",
        },
      ],
      caseStudies: [
        {
          title: "Felony Charges Dismissed",
          description:
            "Successfully argued for the dismissal of serious felony charges after identifying critical flaws in the prosecution's evidence and constitutional violations in the investigation process.",
        },
        {
          title: "DUI Case Reduction",
          description:
            "Negotiated the reduction of DUI charges to a lesser offense after challenging the validity of field sobriety tests and breathalyzer results, preserving our client's driving privileges and professional license.",
        },
        {
          title: "Federal Fraud Acquittal",
          description:
            "Secured a full acquittal in a complex federal fraud case through meticulous preparation, expert testimony, and effective cross-examination of government witnesses.",
        },
      ],
      slug: "criminal-defense",
    },
  ];

  return practiceAreas.find((area) => area.slug === slug) || practiceAreas[0];
};

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const practiceArea = getPracticeAreaData(slug);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-700 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={
              practiceArea.image || "/placeholder.svg?height=1080&width=1920"
            }
            alt={practiceArea.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="custom-container relative  z-10  text-white">
          <div className="">
            <div className="mb-4">
              <Link
                href="/practice-areas"
                className="inline-flex items-center text-gray-300 hover:text-gold-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Practice Areas
              </Link>
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              {practiceArea.title}
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              {practiceArea.description}
            </p>
            <div className="mt-8">
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] md:h-auto overflow-hidden rounded-lg shadow-xl">
              <Image
                src={
                  practiceArea.image || "/placeholder.svg?height=800&width=1200"
                }
                alt={practiceArea.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                Overview
              </h2>
              <div
                className="mt-4 text-lg text-gray-600 space-y-4"
                dangerouslySetInnerHTML={{
                  __html: practiceArea.longDescription,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive legal services tailored to your specific needs in{" "}
              {practiceArea.title}.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {practiceArea.services.map((service, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy-700">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Examples of how we've helped clients achieve successful outcomes
              in {practiceArea.title} matters.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {practiceArea.caseStudies.map((caseStudy, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
                    <CheckCircle className="h-6 w-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-700">
                    {caseStudy.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{caseStudy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Meet Our {practiceArea.title} Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our experienced attorneys specialize in {practiceArea.title} and
              are dedicated to achieving the best possible outcomes for our
              clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
            {practiceArea.attorneys.map((attorney, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={attorney.image || "/placeholder.svg"}
                    alt={attorney.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy-700">
                    {attorney.name}
                  </h3>
                  <p className="text-gold-600">{attorney.title}</p>
                  <div className="mt-4 flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full h-8 w-8 p-0"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full h-8 w-8 p-0"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Call</span>
                    </Button>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/attorneys/${attorney.slug}`}
                      className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
                    >
                      View Profile
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-navy-700 text-navy-700 hover:bg-navy-50"
            >
              <Link href="/attorneys">View All Attorneys</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about {practiceArea.title}.
            </p>
          </div>

          <div className="mx-auto max-w-3xl divide-y rounded-lg border">
            {practiceArea.faqs.map((faq, index) => (
              <div key={index} className="p-6">
                <h3 className="font-serif text-lg font-medium text-navy-700">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have more questions about {practiceArea.title}?
            </p>
            <Button className="bg-navy-700 hover:bg-navy-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-navy-700 text-white">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Client Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Hear what our clients have to say about their experience with our{" "}
              {practiceArea.title} services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">
                  The team at Justice Law provided exceptional guidance during a
                  difficult time. Their expertise in {practiceArea.title} was
                  invaluable to achieving a positive outcome in my case.
                </p>
                <div className="mt-6">
                  <p className="font-medium">Robert Smith</p>
                  <p className="text-sm text-gray-300">Client</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">
                  I was impressed by the knowledge and professionalism of the
                  attorneys at Justice Law. They explained complex{" "}
                  {practiceArea.title} concepts in terms I could understand and
                  fought tirelessly for my rights.
                </p>
                <div className="mt-6">
                  <p className="font-medium">Maria Garcia</p>
                  <p className="text-sm text-gray-300">Client</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">
                  The compassionate approach from Justice Law made a difficult
                  situation much more manageable. Their expertise in{" "}
                  {practiceArea.title} helped me achieve an outcome that
                  exceeded my expectations.
                </p>
                <div className="mt-6">
                  <p className="font-medium">James Wilson</p>
                  <p className="text-sm text-gray-300">Client</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Related Practice Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore other practice areas that may be relevant to your legal
              needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mx-auto max-w-5xl">
            {["Corporate Law", "Family Law", "Criminal Defense"]
              .filter((title) => title !== practiceArea.title)
              .map((title, index) => {
                const slug = title.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Card
                    key={index}
                    className="overflow-hidden border-none shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 text-3xl">
                        {title === "Corporate Law"
                          ? "📊"
                          : title === "Family Law"
                          ? "👪"
                          : title === "Criminal Defense"
                          ? "⚖️"
                          : "📝"}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-navy-700">
                        {title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Our {title.toLowerCase()} practice provides
                        comprehensive legal services tailored to your specific
                        needs.
                      </p>
                      <Link
                        href={`/practice-areas/${slug}`}
                        className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="rounded-lg bg-navy-700 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Discuss Your {practiceArea.title} Needs?
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                Our team of experienced attorneys is ready to help you navigate
                your legal challenges with expertise, integrity, and
                personalized attention.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
