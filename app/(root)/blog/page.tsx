import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import BlogCard from "@/components/blog/blog-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { blogPosts } from "@/config/blog";

export const metadata: Metadata = {
  title: pagesConfig.blog.metadata.title,
  description: pagesConfig.blog.metadata.description,
};

const renderContent = (tabVal: string) => {
  let postArr = blogPosts;
  
  if (tabVal !== "all") {
    postArr = postArr.filter((val) => val.category === tabVal);
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {postArr.map((post) => (
        <BlogCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default function BlogPage() {
  const tabItems = [
    {
      value: "all",
      label: "All",
      content: renderContent("all"),
    },
    {
      value: "MLOps",
      label: "MLOps",
      content: renderContent("MLOps"),
    },
    {
      value: "LLM",
      label: "LLM",
      content: renderContent("LLM"),
    },
    {
      value: "Reinforcement Learning",
      label: "RL",
      content: renderContent("Reinforcement Learning"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.blog.title}
      description={pagesConfig.blog.description}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
