<script lang="ts">
  import Icon, { addCollection } from "@iconify/svelte";
  import gameIcons from "@iconify-json/game-icons";
  import mdi from "@iconify-json/mdi";

  addCollection(gameIcons);
  addCollection(mdi);

  export let set: "game-icons" | "mdi" = "game-icons";
  export let name = "";
  export let size: string | number = "1em";
  export let className = "";
  export let decorative = true;
  export let ariaLabel = "";

  $: iconName = `${set}:${name}`;
</script>

<Icon
  icon={iconName}
  width={size}
  height={size}
  aria-hidden={decorative ? "true" : undefined}
  role={decorative ? undefined : "img"}
  aria-label={!decorative ? ariaLabel || name : undefined}
  class={className}
/>
