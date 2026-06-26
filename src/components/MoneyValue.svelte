<script lang="ts">
  import { formatMoney, moneyTone } from "../lib/money";

  export let amount = 0;
  export let locale = "pt-BR";
  export let currency = "BRL";
  export let hidden = false;
  export let tone: "positive" | "negative" | "neutral" | "auto" = "auto";
  export let className = "";

  $: resolvedTone = tone === "auto" ? moneyTone(amount) : tone;
  $: toneClass = {
    positive: "text-financial-income",
    negative: "text-financial-expense",
    neutral: "text-text-default"
  }[resolvedTone];
  $: signDisplay = resolvedTone === "neutral" ? "auto" : "always";
</script>

<span class={`font-numeric tabular-nums text-right font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${toneClass} ${className}`}>
  {hidden ? "••••" : formatMoney(amount, { locale, currency, signDisplay })}
</span>
