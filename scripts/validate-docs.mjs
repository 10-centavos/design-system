import fs from "node:fs";
import path from "node:path";
import { rootDir } from "./token-utils.mjs";

const requiredFiles = [
  "README.md",
  "AGENTS.md",
  "CHANGELOG.md",
  "TODO.md",
  "docs/agent-consumption.md",
  "docs/component-inventory.md",
  "docs/token-map.md",
  "docs/financial-semantics.md",
  "docs/accessibility-checklist.md",
  "docs/approvals/ux-ui-approval.md",
  "docs/contracts/design-system.contract.md",
  "docs/contracts/design-tokens.contract.md",
  "docs/contracts/ui.contract.md",
  "docs/contracts/implementation.contract.md",
  "docs/contracts/code-guiding.contract.md",
  "docs/contracts/frontend.agent.contract.md"
];

const errors = requiredFiles
  .filter((file) => !fs.existsSync(path.join(rootDir, file)))
  .map((file) => `Missing documentation file ${file}`);

const todo = fs.existsSync(path.join(rootDir, "TODO.md"))
  ? fs.readFileSync(path.join(rootDir, "TODO.md"), "utf8")
  : "";

for (const contract of requiredFiles.filter((file) => file.startsWith("docs/contracts/"))) {
  if (!todo.includes(contract)) errors.push(`TODO.md does not reference ${contract}`);
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Documentation validation passed");
