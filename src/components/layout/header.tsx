// 상단 네비게이션 헤더 (데스크톱 메뉴 + 테마 토글)
import Link from "next/link";
import { Rocket } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="size-5" />
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-1">
          {siteConfig.nav.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {item.title}
              </a>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {item.title}
              </Link>
            ),
          )}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
