import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import CertificationCard from "@/components/certifications/certification-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { certifications } from "@/config/certifications";

export const metadata: Metadata = {
  title: pagesConfig.certifications.metadata.title,
  description: pagesConfig.certifications.metadata.description,
};

const renderContent = (tabVal: string) => {
  let certArr = certifications;
  
  if (tabVal !== "all") {
    certArr = certArr.filter((val) => val.type === tabVal);
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {certArr.map((cert) => (
        <CertificationCard certification={cert} key={cert.id} />
      ))}
    </div>
  );
};

export default function CertificationsPage() {
  const tabItems = [
    {
      value: "all",
      label: "All",
      content: renderContent("all"),
    },
    {
      value: "Certification",
      label: "Certifications",
      content: renderContent("Certification"),
    },
    {
      value: "Award",
      label: "Awards",
      content: renderContent("Award"),
    },
    {
      value: "Achievement",
      label: "Achievements",
      content: renderContent("Achievement"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.certifications.title}
      description={pagesConfig.certifications.description}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
