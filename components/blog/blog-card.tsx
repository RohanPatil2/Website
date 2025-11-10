import { BlogPostInterface } from "@/config/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icons } from "@/components/common/icons";

interface Props {
  post: BlogPostInterface;
}

export default function BlogCard({ post }: Props) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge className="w-fit">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">
            {post.readTime} min read
          </span>
        </div>
        <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
          <span>{formatDate(post.publishDate)}</span>
          {post.views && (
            <span className="flex items-center gap-1">
              {post.views.toLocaleString()} views
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-1 mt-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {post.link && (
          <Link 
            href={post.link} 
            target="_blank"
            className="text-sm text-primary hover:underline mt-4 inline-flex items-center gap-1"
          >
            Read Article →
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
