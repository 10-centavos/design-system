import fs from "node:fs";
import path from "node:path";

export const rootDir = path.resolve(new URL("..", import.meta.url).pathname);

export function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(rootDir, relativePath), "utf8"));
}

export function writeFile(relativePath, content) {
  const filePath = path.join(rootDir, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

export function deepMerge(base, override) {
  const result = structuredClone(base);
  for (const [key, value] of Object.entries(override)) {
    if (key === "meta" || key === "$schema") continue;
    if (isPlainObject(value) && isPlainObject(result[key])) {
      result[key] = deepMerge(result[key], value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export function flattenTokens(input, prefix = [], output = {}) {
  for (const [key, value] of Object.entries(input)) {
    if (key === "meta" || key === "$schema") continue;
    const nextPrefix = [...prefix, key];
    if (isPlainObject(value)) {
      flattenTokens(value, nextPrefix, output);
    } else {
      output[nextPrefix.join(".")] = value;
    }
  }
  return output;
}

export function resolveAliases(flatTokens) {
  const resolved = {};
  const resolving = new Set();

  function resolveKey(key) {
    if (resolved[key] !== undefined) return resolved[key];
    if (!(key in flatTokens)) throw new Error(`Missing token reference: ${key}`);
    if (resolving.has(key)) throw new Error(`Circular token reference: ${key}`);

    resolving.add(key);
    const value = flatTokens[key];
    if (typeof value === "string" && value.startsWith("{") && value.endsWith("}")) {
      resolved[key] = resolveKey(value.slice(1, -1));
    } else {
      resolved[key] = value;
    }
    resolving.delete(key);
    return resolved[key];
  }

  for (const key of Object.keys(flatTokens)) resolveKey(key);
  return resolved;
}

export function cssVarName(tokenName) {
  return `--${tokenName.replaceAll(".", "-").replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)}`;
}

export function tokenKey(tokenName) {
  return tokenName.replace(/^[^.]+\./, "").replaceAll(".", "-").replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}

export function loadTokenSets() {
  const primitive = readJson("tokens/primitive.json");
  const semanticLight = readJson("tokens/semantic.light.json");
  const semanticDark = readJson("tokens/semantic.dark.json");
  const component = readJson("tokens/component.json");

  const light = deepMerge(deepMerge(primitive, semanticLight), component);
  const dark = deepMerge(light, semanticDark);

  return {
    primitive,
    semanticLight,
    semanticDark,
    component,
    light,
    dark,
    lightFlat: flattenTokens(light),
    darkFlat: flattenTokens(dark)
  };
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
