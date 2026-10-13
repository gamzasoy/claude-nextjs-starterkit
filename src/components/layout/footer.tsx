// 하단 푸터 (저작권 표시)
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-center px-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
