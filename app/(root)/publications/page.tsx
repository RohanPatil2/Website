import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import PublicationCard from "@/components/publications/publication-card";
import { pagesConfig } from "@/config/pages";
import { publications } from "@/config/publications";

export const metadata: Metadata = {
  title: pagesConfig.publications.metadata.title,
  description: pagesConfig.publications.metadata.description,
};

export default function PublicationsPage() {
  return (
    <PageContainer
      title={pagesConfig.publications.title}
      description={pagesConfig.publications.description}
    >
      <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {publications.map((publication) => (
          <PublicationCard publication={publication} key={publication.id} />
        ))}
      </div>
    </PageContainer>
  );
}