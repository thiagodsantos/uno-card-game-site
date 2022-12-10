<script setup lang="ts">
import { defineProps } from "vue";
import Button from 'primevue/button';

defineProps({
  class: String,
  text: String,
  icon: String,
});

</script>

<template>
  <Button :class="class">
    <i v-if="icon" :class="'pi ' + icon"></i>
    <span>{{ $t(text ?? '') }}</span>
  </Button>
</template>

<style scoped>
i.pi {
  padding-right: 10px;
}
</style>
