<script lang="ts">
  import Icon, { addIcon } from "@iconify/svelte";
  import abacus from "@iconify-icons/game-icons/abacus";
  import bookAura from "@iconify-icons/game-icons/book-aura";
  import gameConsole from "@iconify-icons/game-icons/game-console";
  import magicPotion from "@iconify-icons/game-icons/magic-potion";
  import magicSwirl from "@iconify-icons/game-icons/magic-swirl";
  import microchip from "@iconify-icons/game-icons/microchip";
  import robotHelmet from "@iconify-icons/game-icons/robot-helmet";
  import scrollUnfurled from "@iconify-icons/game-icons/scroll-unfurled";
  import threeDStairs from "@iconify-icons/game-icons/3d-stairs";
  import trophyCup from "@iconify-icons/game-icons/trophy-cup";
  import wizardStaff from "@iconify-icons/game-icons/wizard-staff";
  import diceTwentyFacesTwenty from "@iconify-icons/game-icons/dice-twenty-faces-twenty";
  import magnify from "@iconify-icons/mdi/magnify";

  addIcon("game-icons:abacus", abacus);
  addIcon("game-icons:book-aura", bookAura);
  addIcon("game-icons:game-console", gameConsole);
  addIcon("game-icons:magic-potion", magicPotion);
  addIcon("game-icons:magic-swirl", magicSwirl);
  addIcon("game-icons:microchip", microchip);
  addIcon("game-icons:robot-helmet", robotHelmet);
  addIcon("game-icons:scroll-unfurled", scrollUnfurled);
  addIcon("game-icons:3d-stairs", threeDStairs);
  addIcon("game-icons:trophy-cup", trophyCup);
  addIcon("game-icons:wizard-staff", wizardStaff);
  addIcon("game-icons:dice-twenty-faces-twenty", diceTwentyFacesTwenty);
  addIcon("mdi:magnify", magnify);

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
