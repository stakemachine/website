import Link from "next/link";
import { Github, Twitter } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`border-t ${className}`}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <Link href="/" aria-label="Stake Machine" className="flex items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Logo</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect
                id="Rectangle"
                fill="#6366F1"
                x="0"
                y="0"
                width="64"
                height="64"
                rx="8"
              ></rect>
              <text
                id="S"
                fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
                fontSize="60"
                fontWeight="800"
                letterSpacing="-1"
                fill="#FFFFFF"
              >
                <tspan x="13" y="54">
                  S
                </tspan>
              </text>
            </g>
          </svg>
        </Link>
        <p className="text-xs sm:text-sm text-center sm:text-left text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex space-x-4 sm:space-x-6">
          <Link
            href="https://github.com/stakemachine"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link
            href="https://twitter.com/stakemachine"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
