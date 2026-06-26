<script lang="ts">
  export let tone:
    | "neutral"
    | "income"
    | "expense"
    | "savings"
    | "debt"
    | "warning"
    | "danger"
    | "success" = "neutral";
  export let label = "";
  export let className = "";

  $: toneClass = {
    neutral: "bg-background-muted text-text-muted",
    income: "bg-financial-income-subtle text-financial-income",
    expense: "bg-financial-expense-subtle text-financial-expense",
    savings: "bg-financial-savings-subtle text-financial-savings",
    debt: "bg-financial-debt-subtle text-financial-debt",
    warning: "bg-warning-subtle text-text-warning",
    danger: "bg-danger-subtle text-text-danger",
    success: "bg-success-subtle text-text-success"
  }[tone];
</script>

<span class={`inline-flex items-center rounded-component-full px-component-sm py-component-xs text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${toneClass} ${className}`}>
  <slot>{label}</slot>
</span>
