<script setup lang="ts">
import Button from 'primevue/button';

defineProps({
  className: String,
  text: String,
  icon: String,
  onlyIcon: Boolean || undefined,
});
</script>

<template>
  <Button :class="className">
    <i v-if="icon" :class="'pi ' + icon"></i>
    <span v-if="!onlyIcon" class="text-margin">{{ $t(text ?? '') }}</span>
  </Button>
</template>

<style scoped>
.text-margin {
  padding-left: 10px;
}
</style>
