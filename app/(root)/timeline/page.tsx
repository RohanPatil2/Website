import { Metadata } from "next";
import { pagesConfig } from "@/config/pages";
import { education } from "@/config/education";
import { experiences } from "@/config/experience";
import { JourneyTimeline } from "@/components/timeline/journey-timeline";
import PageHeader from "@/components/common/page-header";

export const metadata: Metadata = {
  title: pagesConfig.timeline.metadata.title,
  description: pagesConfig.timeline.metadata.description,
  alternates: {
    canonical: "/timeline",
  },
};

export default function TimelinePage() {
  return (
    <div className="container mx-auto py-8 md:py-12">
      <PageHeader
        title={pagesConfig.timeline.title}
        description={pagesConfig.timeline.description}
      />

      <div className="mt-8 md:mt-12">
        <JourneyTimeline education={education} experience={experiences} />
      </div>

      {/* Legend */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 px-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 rounded-full border-4 border-background bg-card shadow flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <span className="font-medium">Education</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 rounded-full border-4 border-background bg-card shadow flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <span className="font-medium">Experience</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 rounded-full border-4 border-primary bg-primary/10 shadow flex items-center justify-center animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <span className="font-medium">Current</span>
        </div>
      </div>
    </div>
  );
}
