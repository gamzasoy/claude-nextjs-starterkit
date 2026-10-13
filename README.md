# Starter Kit

Next.js 15 (App Router) 기반의 웹 개발 스타터킷입니다.

## 기술 스택

| 기술 | 버전 | 용도 |
|---|---|---|
| Next.js | 15.x (App Router) | 프레임워크 |
| TypeScript | 5.x | 타입 안정성 |
| Tailwind CSS | 4.x | 스타일링 (`tailwind.config` 없이 CSS 기반 설정) |
| shadcn/ui | CLI 기반 | UI 컴포넌트 (`src/components/ui`) |
| lucide-react | 1.x | 아이콘 |
| next-themes | 0.4.x | 다크모드 |

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 주요 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 (Turbopack) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 폴더 구조

```
src/
├── app/              # App Router (layout, page, globals.css)
├── components/
│   ├── ui/           # shadcn/ui 컴포넌트
│   ├── layout/       # Header, Footer
│   ├── theme-provider.tsx
│   └── mode-toggle.tsx
├── config/
│   └── site.ts       # 사이트 이름, 설명, 네비게이션 설정
└── lib/
    └── utils.ts      # cn() 유틸리티
```

## 커스터마이징

- **사이트 정보**: `src/config/site.ts`에서 이름, 설명, 네비게이션을 수정하면 헤더/푸터/메타데이터에 반영됩니다.
- **테마 색상**: `src/app/globals.css`의 CSS 변수(`:root`, `.dark`)를 수정합니다.
- **컴포넌트 추가**: shadcn/ui CLI로 필요한 컴포넌트를 추가합니다.

```bash
npx shadcn@latest add dialog
```

## 참고 문서

- [Next.js 설치 가이드](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS Next.js 설치 가이드](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [shadcn/ui Next.js 설치 가이드](https://ui.shadcn.com/docs/installation/next)
