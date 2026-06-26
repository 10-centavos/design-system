export type MoneyTone = "positive" | "negative" | "neutral";

export interface FormatMoneyOptions {
  locale?: string;
  currency?: string;
  signDisplay?: "auto" | "always" | "exceptZero" | "never";
}

export function formatMoney(
  amount: number,
  {
    locale = "pt-BR",
    currency = "BRL",
    signDisplay = "auto"
  }: FormatMoneyOptions = {}
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    signDisplay
  }).format(amount);
}

export function moneyTone(amount: number): MoneyTone {
  if (amount > 0) return "positive";
  if (amount < 0) return "negative";
  return "neutral";
}
