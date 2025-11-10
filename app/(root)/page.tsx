import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import PublicationCard from "@/components/publications/publication-card";
import BlogCard from "@/components/blog/blog-card";
import CertificationCard from "@/components/certifications/certification-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { featuredPublications } from "@/config/publications";
import { featuredBlogPosts } from "@/config/blog";
import { featuredCertifications } from "@/config/certifications";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${siteConfig.authorName} | ML Engineer & Researcher`,
  description: `${pagesConfig.home.metadata.description}`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "ML Engineer & Researcher",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* ENHANCED HERO SECTION */}
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 min-h-screen flex items-center relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />

        <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center relative z-10 -mt-20">
          {/* Profile Image with glow effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-300" />
            <Image
              src={profileImg}
              height={180}
              width={180}
              sizes="180px"
              className="relative bg-primary rounded-full mb-0 h-auto md:mb-2 max-w-[12rem] md:max-w-[14rem] border-4 border-primary shadow-2xl"
              alt={`${siteConfig.authorName} - ML Engineer & Researcher Portfolio`}
              priority
            />
          </div>

          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            {siteConfig.authorName}
          </AnimatedText>

          <AnimatedText
            as="h2"
            delay={0.4}
            className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary"
          >
            ML Engineer & AI Researcher
          </AnimatedText>

          {/* Status badges */}
          <AnimatedText delay={0.5} className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="px-4 py-2">
              🎓 MS Computer Science - Binghamton University
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              🚀 Open to Opportunities
            </Badge>
          </AnimatedText>

          <AnimatedText delay={0.6} className="mt-4 max-w-[42rem] text-center">
            <p className="leading-relaxed text-muted-foreground text-base sm:text-lg">
              Specializing in <span className="text-primary font-semibold">Machine Learning</span>,
              <span className="text-primary font-semibold"> Deep Learning</span> &
              <span className="text-primary font-semibold"> MLOps</span>
              <br />
              Research Focus: Robotics Reinforcement Learning & LLM Bias Mitigation
            </p>
          </AnimatedText>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col mt-8 items-center justify-center sm:flex-row sm:space-x-4 gap-4 w-full sm:w-auto">
            <AnimatedText delay={0.7}>
              <Link
                href="/projects"
                className={cn(buttonVariants({ size: "lg" }), "min-w-[200px] shadow-lg hover:shadow-xl transition-shadow")}
              >
                <Icons.code className="w-5 h-5 mr-2" /> View Projects
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "min-w-[200px] border-2"
                )}
              >
                <Icons.contact className="w-5 h-5 mr-2" /> Hire Me
              </Link>
            </AnimatedText>
          </div>

          {/* Social Links */}
          <AnimatedText delay={0.9} className="flex items-center gap-4 mt-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Icons.gitHub className="w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Icons.linkedin className="w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.links.email}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Icons.gmail className="w-6 h-6" />
            </Link>
          </AnimatedText>

          <AnimatedText delay={1.0}>
            <Icons.chevronDown className="h-8 w-8 mt-8 animate-bounce text-primary" />
          </AnimatedText>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION - MOVED TO TOP */}
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-16 my-8"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="mb-2">Featured Work</Badge>
          <AnimatedText
            as="h2"
            className="font-heading text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Cutting-edge ML/AI projects demonstrating expertise in deep learning, MLOps, and real-world applications
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3 mt-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={project} delay={0.1 * index} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.5} className="flex justify-center pt-8">
          <Link href="/projects">
            <Button variant={"default"} size="lg" className="rounded-xl shadow-lg">
              <Icons.chevronRight className="mr-2 h-5 w-5" /> Explore All Projects
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* SKILLS SECTION */}
      <AnimatedSection
        className="container space-y-8 bg-muted/50 backdrop-blur-sm py-16 my-8"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="mb-2">Technical Expertise</Badge>
          <AnimatedText
            as="h2"
            className="font-heading text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center pt-4">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Skills
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* EXPERIENCE SECTION - MOVED UP */}
      <AnimatedSection
        direction="left"
        className="container space-y-8 py-16 my-8"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="mb-2">Professional Journey</Badge>
          <AnimatedText
            as="h2"
            className="font-heading text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Research, teaching, and industry experience in machine learning and software engineering
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3 mt-12">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.5} className="flex justify-center pt-8">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View Full Timeline
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* PUBLICATIONS SECTION */}
      <AnimatedSection
        direction="left"
        className="container space-y-8 bg-muted/50 backdrop-blur-sm py-16 my-8"
        id="publications"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="mb-2">Academic Contributions</Badge>
          <AnimatedText
            as="h2"
            className="font-heading text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {pagesConfig.publications.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Published research papers, patents, and academic work advancing the field of AI/ML
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3 mt-12">
          {featuredPublications.map((publication, index) => (
            <AnimatedSection
              key={publication.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <PublicationCard publication={publication} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.5} className="flex justify-center pt-8">
          <Link href="/publications">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Publications
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* CERTIFICATIONS SECTION */}
      <AnimatedSection
        direction="left"
        className="container space-y-8 py-16 my-8"
        id="certifications"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="mb-2">Professional Credentials</Badge>
          <AnimatedText
            as="h2"
            className="font-heading text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {pagesConfig.certifications.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Industry certifications, awards, and recognition from leading tech organizations
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3 mt-12">
          {featuredCertifications.map((cert, index) => (
            <AnimatedSection
              key={cert.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <CertificationCard certification={cert} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.5} className="flex justify-center pt-8">
          <Link href="/certifications">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Certifications
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* BLOG SECTION */}
      <AnimatedSection
        direction="right"
        className="container space-y-8 bg-muted/50 backdrop-blur-sm py-16 my-8"
        id="blog"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="mb-2">Thought Leadership</Badge>
          <AnimatedText
            as="h2"
            className="font-heading text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {pagesConfig.blog.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Technical insights, tutorials, and deep dives into MLOps, LLMs, and AI engineering
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3 mt-12">
          {featuredBlogPosts.map((post, index) => (
            <AnimatedSection
              key={post.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.5} className="flex justify-center pt-8">
          <Link href="/blog">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> Read More Articles
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* CONTRIBUTIONS SECTION */}
      <AnimatedSection
        direction="down"
        className="container space-y-8 py-16 my-8"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="mb-2">Open Source</Badge>
          <AnimatedText
            as="h2"
            className="font-heading text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Active participation in the developer community through open-source contributions
          </AnimatedText>
        </div>
        <div className="mx-auto justify-center gap-6 md:w-full mt-12">
          <ContributionCard contributions={featuredContributions} />
        </div>
        <AnimatedText delay={0.5} className="flex justify-center pt-8">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Contributions
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
