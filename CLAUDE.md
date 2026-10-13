# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev      # next dev --turbopack (http://localhost:3000)
npm run build    # next build --turbopack (타입 체크 포함)
npm run start    # 빌드 결과 실행
npm run lint     # eslint (next/core-web-vitals + next/typescript)
npx tsc --noEmit # 타입 체크만 실행
```

- 테스트 러너(Jest, Vitest, Playwright 등)는 설정되어 있지 않습니다. 단일 테스트 실행 방법도 없습니다.
- shadcn/ui 컴포넌트 추가: `npx shadcn@latest add <name>` (생성 위치 `src/components/ui`)
- 패키지 설치는 npm을 사용합니다(`package-lock.json`). 다른 패키지 매니저의 lock 파일을 만들지 마세요.

## 기술 스택과 버전 제약

- Next.js **15.x** App Router. `create-next-app`의 최신(16.x) 기준 문서를 그대로 따르지 말고 15 기준으로 확인합니다.
- Tailwind CSS **v4**: `tailwind.config.*` 파일이 없습니다. 테마/변수는 `src/app/globals.css`(`@theme inline`, CSS 변수)에서 관리합니다. PostCSS 설정은 `postcss.config.mjs`의 `"@tailwindcss/postcss"` 플러그인입니다.
- shadcn/ui 스타일은 `base-nova`이며 `@base-ui/react` 기반입니다. `components.json`의 `tailwind.config`는 빈 문자열입니다.
- `package.json`의 `overrides`에서 `postcss`를 `^8.5.30`으로 고정했습니다. 보안 취약점 대응 목적이니 임의로 제거하지 마세요.
- `shadcn` CLI는 devDependency입니다. 런타임 코드에서 import하지 않습니다.

## 아키텍처

- **경로 alias**: `@/*` → `src/*` (tsconfig, shadcn `components.json` 모두 이 기준).
- **루트 레이아웃** (`src/app/layout.tsx`): `ThemeProvider` 안에 `Header`, `main`, `Footer`를 배치합니다. `html`에 `suppressHydrationWarning`이 있는 이유는 next-themes가 `html`의 class를 바꾸기 때문입니다.
- **사이트 설정** (`src/config/site.ts`): 이름, 설명, 네비게이션이 한곳에 있습니다. 메타데이터(`layout.tsx`)와 헤더/푸터가 이 값을 읽습니다. 사이트 정보를 바꿀 때 컴포넌트를 직접 수정하지 말고 이 파일을 수정하세요.
- **다크모드**: `next-themes`가 `class` 속성(`.dark`)으로 테마를 적용합니다. `ModeToggle`은 아이콘을 `dark:` 클래스로 전환하므로 hydration 불일치가 없습니다. 테마 상태를 JS로 읽어 아이콘을 분기하지 마세요.
- **컴포넌트 구분**: `src/components/ui/*`는 shadcn 생성 코드입니다. 프로젝트 전용 컴포넌트는 `src/components/` 또는 `src/components/layout/`에 둡니다.

## 코드 작성 시 주의점

- **`render` prop 사용**: shadcn 컴포넌트는 Radix의 `asChild` 대신 Base UI의 `render` prop을 씁니다. `Button`에 `render={<a />}`처럼 비-button 요소를 넘기면 `nativeButton` 경고가 발생합니다. 링크처럼 보이는 버튼은 `buttonVariants({ variant, size })`를 `Link`나 `a`의 `className`에 적용하세요(`header.tsx`, `page.tsx`의 방식).
- `DropdownMenuTrigger`는 `render={<Button ... />}`로 쓰는 것이 현재 프로젝트의 방식이며 경고가 없습니다.
- 개발 환경에서 변경 사항을 확인할 때는 린트와 빌드를 함께 돌리세요. 빌드는 타입 체크를 포함합니다.
