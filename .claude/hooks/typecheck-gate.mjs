// Stop 훅: Claude가 턴을 끝내기 전에 타입 체크를 실행하고, 실패하면 종료를 막습니다.
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

// Claude Code가 stdin으로 넘겨주는 훅 입력은 사용하지 않으므로 소비만 합니다.
readFileSync(0, "utf8");

// npx는 Windows에서 .cmd 파일이라 shell 옵션이 필요합니다.
const result = spawnSync("npx tsc --noEmit", {
  shell: true,
  encoding: "utf8",
  cwd: process.env.CLAUDE_PROJECT_DIR ?? process.cwd(),
});

if (result.status === 0) process.exit(0);

// stderr 출력과 exit code 2가 함께 Claude에게 전달되어 수정을 유도합니다.
process.stderr.write(
  `타입 체크 실패. 아래 오류를 수정한 뒤 다시 완료하세요.\n${result.stdout ?? ""}${result.stderr ?? ""}`,
);
process.exit(2);
