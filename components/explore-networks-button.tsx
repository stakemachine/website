"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export function ExploreNetworksButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#networks")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button asChild size="lg">
      <Link href="#networks" onClick={handleClick}>
        Explore Networks
      </Link>
    </Button>
  );
}
