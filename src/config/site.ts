// 사이트 전역 설정 값 (이름, 설명, 네비게이션 등)
// 프로젝트를 시작할 때 이 파일만 수정하면 헤더/푸터/메타데이터에 반영됩니다.

export const siteConfig = {
  name: "Starter Kit",
  description: "Next.js 15 · TypeScript · Tailwind CSS v4 · shadcn/ui 기반 웹 개발 스타터킷",
  url: "http://localhost:3000",
  nav: [
    { title: "홈", href: "/" },
    { title: "문서", href: "https://nextjs.org/docs", external: true },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
