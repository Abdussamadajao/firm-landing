import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// This would typically come from a CMS or API in a real application
const getAttorneyData = (slug: string) => {
  const attorneys = [
    {
      name: "Sarah Johnson",
      title: "Managing Partner",
      email: "sjohnson@justicelaw.com",
      phone: "(555) 123-4567",
      specialties: [
        "Corporate Law",
        "Business Litigation",
        "Mergers & Acquisitions",
      ],
      education: [
        "J.D., Harvard Law School, magna cum laude",
        "B.A., Yale University, Economics and Political Science, summa cum laude",
      ],
      barAdmissions: [
        "State Bar of California",
        "State Bar of New York",
        "U.S. District Court, Northern District of California",
        "U.S. Court of Appeals, Ninth Circuit",
      ],
      experience: "25+ years",
      languages: ["English", "Spanish"],
      awards: [
        "Best Lawyers in America, Corporate Law, 2018-2023",
        "Super Lawyers, Business Litigation, 2015-2023",
        "Chambers USA, Leading Individual in Corporate/M&A, 2017-2023",
        "Legal 500, Leading Lawyer in Corporate Law, 2016-2023",
      ],
      publications: [
        {
          title: "The Evolution of Corporate Governance in the Digital Age",
          publisher: "Harvard Business Law Review",
          year: "2022",
        },
        {
          title:
            "Strategic Considerations in Cross-Border Mergers and Acquisitions",
          publisher: "International Business Law Journal",
          year: "2020",
        },
        {
          title:
            "Corporate Compliance Programs: Best Practices and Legal Implications",
          publisher: "Corporate Counsel Review",
          year: "2019",
        },
      ],
      speakingEngagements: [
        {
          title: "Navigating Regulatory Challenges in Corporate Transactions",
          event: "National Business Law Conference",
          year: "2023",
        },
        {
          title: "The Future of Corporate Governance",
          event: "Women in Law Leadership Summit",
          year: "2022",
        },
        {
          title: "Legal Strategies for Business Growth and Expansion",
          event: "Regional Chamber of Commerce Annual Meeting",
          year: "2021",
        },
      ],
      professionalAssociations: [
        "American Bar Association, Business Law Section",
        "State Bar Association, Corporate Law Committee, Chair (2019-2021)",
        "Association of Corporate Counsel",
        "National Association of Women Lawyers",
      ],
      communityInvolvement: [
        "City Legal Aid Society, Board Member",
        "Women's Business Development Center, Volunteer Legal Advisor",
        "University Law School, Adjunct Professor of Corporate Law",
        "Youth Entrepreneurship Program, Mentor",
      ],
      bio: `
        <p>Sarah Johnson co-founded Justice Law in 1998 and has served as Managing Partner since 2010. With over 25 years of experience in corporate law and business litigation, she has established herself as one of the region's preeminent attorneys in these practice areas.</p>
        
        <p>Sarah's practice focuses on complex corporate transactions, including mergers and acquisitions, corporate restructurings, and strategic business planning. She also has extensive experience in corporate governance matters, regulatory compliance, and high-stakes business litigation.</p>
        
        <p>Throughout her career, Sarah has represented clients ranging from startups and emerging growth companies to Fortune 500 corporations across various industries, including technology, healthcare, manufacturing, and financial services. Her strategic approach to legal challenges and deep understanding of business operations allow her to provide practical solutions that align with her clients' business objectives.</p>
        
        <p>Before co-founding Justice Law, Sarah was a partner at a prestigious international law firm, where she specialized in corporate transactions and securities law. Her experience also includes serving as in-house counsel for a multinational technology company, giving her valuable insight into the practical business concerns that inform her legal advice.</p>
        
        <p>Sarah is widely recognized for her legal expertise and has been consistently ranked among the top attorneys in corporate law by numerous legal publications and rating services. She is a frequent speaker at legal and business conferences and has published extensively on corporate law topics.</p>
        
        <p>In addition to her legal practice, Sarah is deeply committed to community service and pro bono work. She serves on several nonprofit boards and regularly provides pro bono legal services to community organizations and entrepreneurs from underserved communities.</p>
      `,
      image: "/placeholder.svg?height=800&width=600",
      caseHighlights: [
        {
          title: "$500 Million Cross-Border Acquisition",
          description:
            "Led the legal team in a complex cross-border acquisition for a technology client, successfully navigating regulatory challenges in multiple jurisdictions.",
        },
        {
          title: "Corporate Restructuring",
          description:
            "Guided a family-owned manufacturing business through a comprehensive corporate restructuring that optimized tax efficiency and positioned the company for future growth.",
        },
        {
          title: "Successful Business Litigation Defense",
          description:
            "Successfully defended a corporate client against a $50 million breach of contract claim, resulting in a complete dismissal of all claims.",
        },
      ],
      testimonials: [
        {
          quote:
            "Sarah's strategic guidance during our company's merger was invaluable. Her ability to anticipate issues and develop creative solutions made a complex transaction proceed smoothly.",
          author: "Alex Rivera",
          position: "CEO, TechInnovate",
        },
        {
          quote:
            "We've worked with Sarah for over a decade on various corporate matters. Her combination of legal expertise and business acumen is rare and has been a tremendous asset to our company.",
          author: "Michelle Johnson",
          position: "CFO, Global Manufacturing Inc.",
        },
      ],
      officeLocation: "Main Office - Cityville",
      availableFor: [
        "Consultations",
        "Speaking Engagements",
        "Media Interviews",
      ],
      slug: "sarah-johnson",
    },
    {
      name: "Michael Chen",
      title: "Senior Partner",
      email: "mchen@justicelaw.com",
      phone: "(555) 123-4568",
      specialties: [
        "Criminal Defense",
        "White Collar Crime",
        "Federal Criminal Defense",
      ],
      education: [
        "J.D., Stanford Law School, with distinction",
        "B.A., UC Berkeley, Political Science, highest honors",
      ],
      barAdmissions: [
        "State Bar of California",
        "U.S. District Court, Northern District of California",
        "U.S. District Court, Central District of California",
        "U.S. Court of Appeals, Ninth Circuit",
        "U.S. Supreme Court",
      ],
      experience: "30+ years",
      languages: ["English", "Mandarin Chinese"],
      awards: [
        "National Trial Lawyers Top 100",
        "Criminal Defense Lawyer of the Year, 2020",
        "Super Lawyers, Criminal Defense, 2010-2023",
        "Best Lawyers in America, Criminal Defense, 2015-2023",
      ],
      publications: [
        {
          title: "Effective Strategies in Federal Criminal Defense",
          publisher: "Criminal Law Review",
          year: "2021",
        },
        {
          title: "White Collar Crime Defense in the Digital Age",
          publisher: "Journal of Criminal Law",
          year: "2019",
        },
        {
          title: "The Evolution of Fourth Amendment Jurisprudence",
          publisher: "Constitutional Law Quarterly",
          year: "2017",
        },
      ],
      speakingEngagements: [
        {
          title: "Defending Complex White Collar Cases",
          event:
            "National Association of Criminal Defense Lawyers Annual Conference",
          year: "2023",
        },
        {
          title: "Digital Evidence in Criminal Trials",
          event: "State Bar Criminal Law Section Symposium",
          year: "2022",
        },
        {
          title: "Effective Cross-Examination Techniques",
          event: "Trial Lawyers Association Workshop",
          year: "2021",
        },
      ],
      professionalAssociations: [
        "National Association of Criminal Defense Lawyers",
        "American Board of Criminal Lawyers, Fellow",
        "State Criminal Defense Bar Association, Past President",
        "International Association of Defense Counsel",
      ],
      communityInvolvement: [
        "Criminal Justice Reform Initiative, Board Member",
        "Legal Aid Society, Volunteer Attorney",
        "Law School Trial Advocacy Program, Instructor",
        "Youth Mentorship Program, Mentor",
      ],
      bio: `
        <p>Michael Chen is a Senior Partner at Justice Law with over 30 years of experience in criminal defense. He is widely regarded as one of the nation's premier criminal defense attorneys, known for his strategic approach, thorough preparation, and exceptional trial skills.</p>
        
        <p>Michael's practice focuses on complex criminal defense matters, including white collar crime, federal criminal defense, and high-profile felony cases. He has successfully represented clients in some of the most challenging and high-stakes criminal cases, including matters involving allegations of fraud, embezzlement, corruption, and violent crimes.</p>
        
        <p>Throughout his distinguished career, Michael has tried over 100 cases to verdict and has argued before the United States Supreme Court. His strategic approach to case preparation and his compelling courtroom presence have resulted in numerous acquittals, dismissals, and favorable outcomes for his clients.</p>
        
        <p>Before joining Justice Law, Michael served as a federal public defender, where he gained extensive experience in federal criminal defense. This background gives him unique insight into the strategies and approaches used by federal prosecutors, which he leverages to benefit his clients.</p>
        
        <p>Michael is deeply committed to protecting the constitutional rights of all individuals and ensuring that every person accused of a crime receives a vigorous defense. He approaches each case with unwavering dedication, meticulous attention to detail, and a commitment to achieving the best possible outcome for his clients.</p>
        
        <p>In addition to his legal practice, Michael is a respected legal scholar and educator. He has published numerous articles on criminal law topics and frequently lectures at law schools and legal conferences. He is also actively involved in criminal justice reform initiatives and provides pro bono representation to indigent defendants.</p>
      `,
      image: "/placeholder.svg?height=800&width=600",
      caseHighlights: [
        {
          title: "Federal Fraud Case Acquittal",
          description:
            "Secured a complete acquittal for a client facing multiple federal fraud charges carrying potential sentences of up to 30 years.",
        },
        {
          title: "High-Profile Murder Case",
          description:
            "Successfully defended a client in a high-profile murder case, resulting in acquittal on all major charges after a six-week trial.",
        },
        {
          title: "White Collar Investigation",
          description:
            "Represented a corporate executive in a complex white collar investigation, resulting in no charges being filed against the client.",
        },
      ],
      testimonials: [
        {
          quote:
            "Michael's expertise in criminal defense was evident from our first meeting. His strategic approach and thorough preparation resulted in all charges being dismissed. I can't recommend him highly enough.",
          author: "Thomas Wilson",
          position: "Client",
        },
        {
          quote:
            "When I was facing serious federal charges, Michael was a beacon of hope and competence. His knowledge of federal criminal procedure and his courtroom skills are unmatched.",
          author: "James Rodriguez",
          position: "Client",
        },
      ],
      officeLocation: "Main Office - Cityville",
      availableFor: [
        "Consultations",
        "Speaking Engagements",
        "Expert Witness Services",
      ],
      slug: "michael-chen",
    },
    {
      name: "Elena Rodriguez",
      title: "Partner, Head of Family Law",
      email: "erodriguez@justicelaw.com",
      phone: "(555) 123-4569",
      specialties: ["Family Law", "Divorce", "Child Custody", "Mediation"],
      education: [
        "J.D., Columbia Law School",
        "B.A., New York University, Psychology, magna cum laude",
      ],
      barAdmissions: [
        "State Bar of California",
        "State Bar of New York",
        "U.S. District Court, Northern District of California",
      ],
      experience: "18 years",
      languages: ["English", "Spanish", "Portuguese"],
      awards: [
        "Family Law Practitioner of the Year, 2021",
        "Top Women Attorneys, 2019-2023",
        "Super Lawyers, Family Law, 2017-2023",
        "Best Lawyers in America, Family Law, 2018-2023",
      ],
      publications: [
        {
          title: "Child-Centered Approaches to Custody Disputes",
          publisher: "Family Law Review",
          year: "2022",
        },
        {
          title: "Mediation Strategies in High-Conflict Divorce Cases",
          publisher: "Journal of Alternative Dispute Resolution",
          year: "2020",
        },
        {
          title:
            "Protecting Children's Interests in International Custody Disputes",
          publisher: "International Family Law Journal",
          year: "2018",
        },
      ],
      speakingEngagements: [
        {
          title: "Navigating Complex Property Division in High-Asset Divorces",
          event: "State Bar Family Law Section Annual Conference",
          year: "2023",
        },
        {
          title: "Effective Mediation Techniques in Family Law",
          event: "Alternative Dispute Resolution Symposium",
          year: "2022",
        },
        {
          title: "Representing Children in Custody Disputes",
          event: "Children's Rights Conference",
          year: "2021",
        },
      ],
      professionalAssociations: [
        "American Academy of Matrimonial Lawyers, Fellow",
        "State Bar Association, Family Law Section, Executive Committee",
        "Association of Family and Conciliation Courts",
        "International Academy of Family Lawyers",
      ],
      communityInvolvement: [
        "Domestic Violence Prevention Center, Board Member",
        "Family Court Self-Help Center, Volunteer Attorney",
        "Children's Rights Organization, Pro Bono Counsel",
        "Community Mediation Center, Volunteer Mediator",
      ],
      bio: `
        <p>Elena Rodriguez is a Partner and Head of the Family Law practice at Justice Law. With 18 years of experience, she has established herself as a leading family law attorney known for her compassionate approach and strategic advocacy in complex family matters.</p>
        
        <p>Elena's practice encompasses all aspects of family law, including divorce, child custody and support, spousal support, complex property division, prenuptial and postnuptial agreements, and domestic violence matters. She is particularly skilled in handling high-conflict custody disputes and high-asset divorce cases.</p>
        
        <p>As a certified mediator and collaborative law practitioner, Elena offers clients alternative dispute resolution options that can reduce conflict, costs, and emotional stress. However, when litigation is necessary, she is a formidable advocate in the courtroom, always focused on achieving the best possible outcomes for her clients and their children.</p>
        
        <p>Elena joined Justice Law in 2005 and has built the family law practice into one of the most respected in the region. Before joining the firm, she worked at a boutique family law practice in New York City, where she handled complex matrimonial matters for high-profile and high-net-worth clients.</p>
        
        <p>Elena's multicultural background and language skills allow her to effectively represent clients from diverse cultural backgrounds. She is particularly experienced in handling international family law matters, including international child custody disputes and cross-border divorce issues.</p>
        
        <p>Throughout her career, Elena has been recognized for her legal excellence and commitment to her clients. She is frequently invited to speak at legal conferences and has published extensively on family law topics. She is also deeply committed to providing pro bono legal services to victims of domestic violence and low-income families.</p>
      `,
      image: "/placeholder.svg?height=800&width=600",
      caseHighlights: [
        {
          title: "Complex High-Asset Divorce",
          description:
            "Successfully represented a client in a high-asset divorce involving complex business valuations, international property, and contested custody issues.",
        },
        {
          title: "International Child Custody Dispute",
          description:
            "Resolved a complex international child custody dispute involving multiple jurisdictions, securing a favorable arrangement that protected the client's parental rights.",
        },
        {
          title: "Collaborative Divorce Success",
          description:
            "Guided a high-conflict couple through the collaborative divorce process, helping them reach an amicable settlement that prioritized their children's well-being.",
        },
      ],
      testimonials: [
        {
          quote:
            "During my divorce, Elena provided compassionate guidance while fiercely advocating for my parental rights. Her expertise in family law made a difficult time much more manageable.",
          author: "Michelle Johnson",
          position: "Client",
        },
        {
          quote:
            "Elena's ability to navigate complex financial issues in our divorce was impressive. She protected my interests while always keeping the focus on what was best for our children.",
          author: "Robert Taylor",
          position: "Client",
        },
      ],
      officeLocation: "Downtown Branch",
      availableFor: [
        "Consultations",
        "Mediation Services",
        "Collaborative Law",
        "Speaking Engagements",
      ],
      slug: "elena-rodriguez",
    },
  ];

  return attorneys.find((attorney) => attorney.slug === slug) || attorneys[0];
};

export default async function AttorneyProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attorney = getAttorneyData(slug);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-700 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt={attorney.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="custom-container relative z-10  text-white">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="mb-4">
                <Link
                  href="/attorneys"
                  className="inline-flex items-center text-gray-300 hover:text-gold-500"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Attorneys
                </Link>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
                {attorney.name}
              </h1>
              <p className="mt-2 text-xl text-gold-500">{attorney.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {attorney.specialties.map((specialty, index) => (
                  <Badge
                    key={index}
                    className="bg-gold-500 text-navy-900 hover:bg-gold-600"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gold-500" />
                  <a
                    href={`mailto:${attorney.email}`}
                    className="text-white hover:text-gold-500"
                  >
                    {attorney.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gold-500" />
                  <a
                    href={`tel:${attorney.phone}`}
                    className="text-white hover:text-gold-500"
                  >
                    {attorney.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <span>{attorney.officeLocation}</span>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto overflow-hidden rounded-lg shadow-xl">
              <Image
                src={attorney.image || "/placeholder.svg"}
                alt={attorney.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="credentials">Credentials</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-12">
              {/* Bio */}
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl mb-6">
                  Biography
                </h2>
                <div
                  className="text-lg text-gray-600 space-y-4"
                  dangerouslySetInnerHTML={{ __html: attorney.bio }}
                />
              </div>

              {/* Languages */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Languages
                </h2>
                <div className="flex flex-wrap gap-2">
                  {attorney.languages.map((language, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-navy-700 bg-navy-50"
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Community Involvement */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Community Involvement
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {attorney.communityInvolvement.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-12">
              {/* Case Highlights */}
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl mb-6">
                  Case Highlights
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {attorney.caseHighlights.map((caseHighlight, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
                          <Briefcase className="h-6 w-6 text-navy-700" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-navy-700">
                          {caseHighlight.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {caseHighlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Publications */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Publications
                </h2>
                <div className="space-y-4">
                  {attorney.publications.map((publication, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-navy-700">
                          {publication.title}
                        </h3>
                        <p className="text-gray-600">
                          {publication.publisher}, {publication.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speaking Engagements */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Speaking Engagements
                </h2>
                <div className="space-y-4">
                  {attorney.speakingEngagements.map((engagement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-navy-700">
                          {engagement.title}
                        </h3>
                        <p className="text-gray-600">
                          {engagement.event}, {engagement.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Client Testimonials
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {attorney.testimonials.map((testimonial, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="text-gold-500 text-4xl font-serif">
                          "
                        </div>
                        <p className="mt-2 text-gray-700 italic">
                          {testimonial.quote}
                        </p>
                        <div className="mt-6">
                          <p className="font-medium text-navy-700">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.position}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="credentials" className="space-y-12">
              {/* Education */}
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl mb-6">
                  Education
                </h2>
                <div className="space-y-4">
                  {attorney.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-600">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bar Admissions */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Bar Admissions
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {attorney.barAdmissions.map((admission, index) => (
                    <li key={index}>{admission}</li>
                  ))}
                </ul>
              </div>

              {/* Professional Associations */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Professional Associations
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {attorney.professionalAssociations.map(
                    (association, index) => (
                      <li key={index}>{association}</li>
                    )
                  )}
                </ul>
              </div>

              {/* Awards & Recognition */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Awards & Recognition
                </h2>
                <div className="space-y-4">
                  {attorney.awards.map((award, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl mb-6">
                  Contact Information
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-bold text-navy-700 mb-4">
                        Direct Contact
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-gold-500" />
                          <div>
                            <p className="font-medium text-navy-700">Email</p>
                            <a
                              href={`mailto:${attorney.email}`}
                              className="text-gray-600 hover:text-gold-600"
                            >
                              {attorney.email}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-gold-500" />
                          <div>
                            <p className="font-medium text-navy-700">Phone</p>
                            <a
                              href={`tel:${attorney.phone}`}
                              className="text-gray-600 hover:text-gold-600"
                            >
                              {attorney.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-gold-500" />
                          <div>
                            <p className="font-medium text-navy-700">
                              Office Location
                            </p>
                            <p className="text-gray-600">
                              {attorney.officeLocation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-bold text-navy-700 mb-4">
                        Available For
                      </h3>
                      <ul className="space-y-2">
                        {attorney.availableFor.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-gold-500" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button className="w-full bg-navy-700 hover:bg-navy-800">
                          <Link href="/contact">Schedule a Consultation</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                  Send a Message
                </h2>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium text-gray-700"
                          >
                            First Name
                          </label>
                          <input
                            id="first-name"
                            className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                            type="text"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium text-gray-700"
                          >
                            Last Name
                          </label>
                          <input
                            id="last-name"
                            className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                          type="email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                          type="tel"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-gray-700"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                          type="text"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="h-32 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                          required
                        ></textarea>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Practice Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {attorney.name} specializes in the following practice areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mx-auto max-w-5xl">
            {attorney.specialties.map((specialty, index) => {
              const slug = specialty.toLowerCase().replace(/\s+/g, "-");
              return (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 text-3xl">
                      {specialty.includes("Corporate")
                        ? "📊"
                        : specialty.includes("Family")
                        ? "👪"
                        : "⚖️"}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy-700">
                      {specialty}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Expert legal representation in {specialty.toLowerCase()}{" "}
                      matters.
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

      {/* Team Members */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Meet Our Other Attorneys
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our team of experienced attorneys is dedicated to providing
              exceptional legal representation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mx-auto max-w-5xl">
            {["Sarah Johnson", "Michael Chen", "Elena Rodriguez"]
              .filter((name) => name !== attorney.name)
              .map((name, index) => {
                const slug = name.toLowerCase().replace(/\s+/g, "-");
                const title =
                  name === "Sarah Johnson"
                    ? "Managing Partner"
                    : name === "Michael Chen"
                    ? "Senior Partner"
                    : "Partner, Head of Family Law";
                return (
                  <Card
                    key={index}
                    className="overflow-hidden border-none shadow-md"
                  >
                    <div className="relative h-[200px]">
                      <Image
                        src="/placeholder.svg?height=400&width=300"
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-bold text-navy-700">
                        {name}
                      </h3>
                      <p className="text-gold-600">{title}</p>
                      <Link
                        href={`/attorneys/${slug}`}
                        className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700"
                      >
                        View Profile
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
                Ready to Work With {attorney.name}?
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                Schedule a consultation to discuss your legal needs and how we
                can help you achieve your goals.
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
