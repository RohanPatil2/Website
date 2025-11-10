import { PublicationInterface } from "@/config/publications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  publication: PublicationInterface;
}

export default function PublicationCard({ publication }: Props) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <Badge className="w-fit mb-2">{publication.type}</Badge>
        <CardTitle className="text-lg">{publication.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {publication.authors.join(", ")}
        </p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm mb-2">
          <strong>{publication.venue}</strong> • {publication.year}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {publication.abstract}
        </p>
        {publication.link && (
          <Link 
            href={publication.link} 
            target="_blank"
            className="text-sm text-primary hover:underline mt-4 inline-block"
          >
            View Publication →
          </Link>
        )}
      </CardContent>
    </Card>
  );
}