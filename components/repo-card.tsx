import Link from "next/link";
import { Star, GitFork } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { GithubRepo } from "@/constants/github.repos";
import { GithubColorsJSON } from "@/constants/github.colors";

export function RepoCard({ repo }: { repo: GithubRepo }) {
  return (
    <Link href={repo.url} target="_blank" rel="noopener noreferrer nofollow">
      <Card className="h-full transition-all hover:border-primary hover:shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2 text-lg font-medium">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              className="text-muted-foreground"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <span className="text-primary hover:underline">{repo.name}</span>
          </div>
          <p className="text-sm text-muted-foreground">{repo.description}</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{
                  backgroundColor: repo.language
                    ? GithubColorsJSON[repo.language].color
                    : "#ffffff",
                }}
              />
              {repo.language}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {repo.stargazers_count}
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {repo.forks}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
