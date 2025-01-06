import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  description: string;
  features: string[];
  githubUrl: string;
}

export function ProjectCard({
  name,
  description,
  features,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-2xl mb-2">{name}</CardTitle>
          <Button variant="outline" size="icon" asChild>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground text-lg">{description}</p>
        <div>
          <h3 className="text-lg font-medium mb-3">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
