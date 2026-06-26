import { flattenTokens, loadTokenSets, resolveAliases } from "./token-utils.mjs";

const { primitive, semanticLight, semanticDark, component, lightFlat, darkFlat } = loadTokenSets();

const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function references(value) {
  if (typeof value !== "string") return [];
  const match = value.match(/^\{(.+)\}$/);
  return match ? [match[1]] : [];
}

const primitiveFlat = flattenTokens(primitive);
const semanticFlat = {
  ...flattenTokens(semanticLight),
  ...flattenTokens(semanticDark)
};
const componentFlat = flattenTokens(component);

for (const [name, value] of Object.entries(semanticFlat)) {
  for (const reference of references(value)) {
    assert(reference in primitiveFlat, `Semantic token ${name} must reference primitive token, got ${reference}`);
  }
}

for (const [name, value] of Object.entries(componentFlat)) {
  for (const reference of references(value)) {
    assert(reference in semanticFlat, `Component token ${name} must reference semantic token, got ${reference}`);
  }
}

for (const required of [
  "color.financial.income",
  "color.financial.expense",
  "color.financial.savings",
  "color.financial.debt",
  "color.financial.funded",
  "color.financial.partial",
  "color.financial.empty",
  "color.financial.overspent",
  "color.financial.goalComplete",
  "color.financial.goalProgress",
  "typography.numeric.fontVariantNumeric",
  "breakpoint.sm",
  "motion.duration.normal"
]) {
  assert(required in lightFlat, `Missing required token ${required}`);
}

try {
  resolveAliases(lightFlat);
  resolveAliases(darkFlat);
} catch (error) {
  errors.push(error.message);
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Token validation passed");
