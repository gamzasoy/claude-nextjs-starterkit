// 홈 페이지: 히어로 섹션과 기능 카드 예시
import Link from "next/link";
import { ArrowRight, Layers, Palette, Zap } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "빠른 시작",
    description: "Next.js 15 App Router와 TypeScript가 미리 설정되어 있습니다.",
  },
  {
    icon: Palette,
    title: "테마 지원",
    description: "Tailwind CSS v4와 next-themes로 다크모드를 바로 사용할 수 있습니다.",
  },
  {
    icon: Layers,
    title: "컴포넌트 라이브러리",
    description: "shadcn/ui 컴포넌트를 CLI로 추가하고 자유롭게 수정할 수 있습니다.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          웹 개발을 빠르게 시작하세요
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS, shadcn/ui가 준비된 스타터킷입니다.
          <br />
          <code className="font-mono text-sm">src/app/page.tsx</code>를 수정해 시작해보세요.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="#features" className={buttonVariants({ size: "lg" })}>
            시작하기
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            shadcn/ui 문서
          </a>
        </div>
      </section>

      <section id="features" className="grid scroll-mt-20 gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="size-6 text-primary" />
              <CardTitle className="mt-2">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
