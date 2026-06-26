import fs from "node:fs";
import path from "node:path";
import { rootDir } from "./token-utils.mjs";

const componentDir = path.join(rootDir, "src/components");
const errors = [];

const forbiddenPatterns = [
  /\b(?:text|bg|border|ring|from|to|via)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}\b/,
  /\b(?:p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|gap|w|h|min-w|min-h|max-w|max-h|rounded|shadow|text)-\[[^\]]+\]/,
  /style=/
];

const requiredComponents = [
  "Alert.svelte",
  "Badge.svelte",
  "BudgetCategoryRow.svelte",
  "Button.svelte",
  "Card.svelte",
  "ChartPanel.svelte",
  "GoalCard.svelte",
  "Input.svelte",
  "Modal.svelte",
  "MoneyValue.svelte",
  "Progress.svelte",
  "Select.svelte",
  "Skeleton.svelte",
  "TransactionItem.svelte"
];

for (const file of requiredComponents) {
  const filePath = path.join(componentDir, file);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing component ${file}`);
    continue;
  }

  const content = fs.readFileSync(filePath, "utf8");
  for (const pattern of forbiddenPatterns) {
    if (pattern.test(content)) errors.push(`${file} violates component styling rule: ${pattern}`);
  }
  if (!content.includes("focus-visible:")) errors.push(`${file} must expose a focus-visible state or compose a component that does`);
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Component validation passed");
