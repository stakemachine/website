"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import TextLogo from "./text-logo";
import { NetworksJson } from "@/constants/networks";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const networks = NetworksJson;
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center font-medium">
            <TextLogo />
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Networks</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/networks"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            All Networks
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            View all supported networks
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      {networks.map((network) => (
                        <NavigationMenuLink key={network.slug} asChild>
                          <Link
                            href={`/networks/${network.slug}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-3">
                              <Image
                                src={network.logo}
                                alt={`${network.name} logo`}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              <div className="text-sm font-medium leading-none">
                                {network.name}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {network.desc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9"
                asChild
              >
                <Link
                  href="https://twitter.com/stakemachine"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9"
                asChild
              >
                <Link
                  href="https://github.com/stakemachine"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ThemeToggle className="h-8 w-8 sm:h-9 sm:w-9" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
