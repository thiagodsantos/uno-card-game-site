<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <span class="template p-buttonset">
    <Button class="p-button-success">
      <i class="pi pi-plus"></i>
      <span>{{ $t("room.create") }}</span>
    </Button>
    <Button>
      <i class="pi pi-user-plus"></i>
      <span>{{ $t("room.join") }}</span>
    </Button>
  </span>
</template>

<style scoped>
i.pi {
  padding-right: 10px;
}
</style>
