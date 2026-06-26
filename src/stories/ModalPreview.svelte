<script lang="ts">
import { Bot, CircleDollarSign } from "@lucide/svelte";

import Alert from "../components/Alert.svelte";
import Badge from "../components/Badge.svelte";
import Button from "../components/Button.svelte";
import Modal from "../components/Modal.svelte";
import PixelCanvas from "../components/PixelCanvas.svelte";

  export let variant: "confirm" | "edit-budget" | "agent" = "confirm";

  const open = true;
</script>

{#if variant === "confirm"}
  <Modal open={open} title="Boss fight: excluir categoria" description="Esta acao remove a categoria do orcamento e afeta os totais do mes.">
    <PixelCanvas variant="spark" className="h-layout-sm" />
    <Alert tone="warning" title="Verifique os impactos" message="As despesas continuam registradas; a categoria apenas sai do agrupamento." />
    <div class="flex flex-wrap gap-component-sm">
      <Badge tone="danger">boss fight</Badge>
      <Badge tone="warning">acao irreversivel</Badge>
      <Badge tone="info">modo neon</Badge>
    </div>
    <svelte:fragment slot="footer">
      <Button variant="ghost">Cancelar</Button>
      <Button variant="danger">Excluir</Button>
    </svelte:fragment>
  </Modal>
{:else if variant === "edit-budget"}
  <Modal open={open} title="Atualizar carga" description="Ajuste um valor sem perder a leitura do status atual.">
    <PixelCanvas variant="wave" className="h-layout-sm" />
    <div class="grid gap-component-sm text-sm">
      <div class="flex items-center gap-component-sm text-brand-default">
        <CircleDollarSign aria-hidden="true" class="size-component-md" />
        Carga mensal
      </div>
      <p class="text-text-muted">O agente sugere um ajuste pequeno para transporte e uma reducao em lazer.</p>
    </div>
    <svelte:fragment slot="footer">
      <Button variant="secondary">Fechar</Button>
      <Button variant="primary">Salvar ajuste</Button>
    </svelte:fragment>
  </Modal>
{:else}
  <Modal open={open} title="Acoes do agente" description="O sistema propõe a melhor proxima acao com base no fluxo e no risco.">
    <PixelCanvas variant="pulse" className="h-layout-sm" />
    <div class="grid gap-component-sm">
      <div class="flex items-center gap-component-sm text-brand-default">
        <Bot aria-hidden="true" class="size-component-md" />
        Diagnostico do agente
      </div>
      <p class="text-sm text-text-default">Transporte esta overspent e deve ser ajustado antes do fechamento mensal.</p>
      <Alert tone="info" title="Sugestao" message="Compense parte do excesso com sobra de alimentacao ou lazer." />
      <Badge tone="info">neon guidance</Badge>
    </div>
    <svelte:fragment slot="footer">
      <Button variant="ghost">Ignorar</Button>
      <Button variant="primary">Aplicar sugestao</Button>
    </svelte:fragment>
  </Modal>
{/if}
