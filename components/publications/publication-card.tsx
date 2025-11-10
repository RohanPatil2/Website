import { PublicationInterface } from "@/config/publications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icons } from "@/components/common/icons";

interface Props {
  publication: PublicationInterface;
}

export default function PublicationCard({ publication }: Props) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge className="w-fit">{publication.type}</Badge>
          <span className="text-sm text-muted-foreground">{publication.year}</span>
        </div>
        <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          {publication.authors.join(", ")}
        </p>
        <p className="text-sm font-medium text-primary mt-1">
          {publication.venue}
        </p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-4 flex-1">
          {publication.abstract}
        </p>
        <div className="flex flex-wrap gap-1 mt-4">
          {publication.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {publication.link && (
          <Link 
            href={publication.link} 
            target="_blank"
            className="text-sm text-primary hover:underline mt-4 inline-flex items-center gap-1"
          >
            View Publication →
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
