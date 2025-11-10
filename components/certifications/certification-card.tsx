import { CertificationInterface } from "@/config/certifications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icons } from "@/components/common/icons";

interface Props {
  certification: CertificationInterface;
}

export default function CertificationCard({ certification }: Props) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short' 
    }).format(date);
  };

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge className="w-fit">{certification.type}</Badge>
        </div>
        <CardTitle className="text-lg leading-tight">{certification.title}</CardTitle>
        <p className="text-sm font-medium text-primary mt-1">
          {certification.organization}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Issued: {formatDate(certification.issueDate)}
        </p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {certification.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-4">
          {certification.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
        {certification.credentialUrl && (
          <Link 
            href={certification.credentialUrl} 
            target="_blank"
            className="text-sm text-primary hover:underline mt-4 inline-flex items-center gap-1"
          >
            View Credential →
          </Link>
        )}
        {certification.credentialId && (
          <p className="text-xs text-muted-foreground mt-2">
            ID: {certification.credentialId}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
