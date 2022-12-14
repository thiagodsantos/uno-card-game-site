<script setup lang="ts">
import InputText from 'primevue/inputtext';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

defineProps({
  placeholder: String,
  disabled: Boolean,
  buttonIcon: String,
  buttonClass: String,
});
</script>

<template>
  <div class="p-inputgroup">
    <InputText :placeholder="placeholder" :disabled="disabled" />
    <ButtonComponent
      :icon="'pi ' + buttonIcon"
      :class="buttonClass"
      :onlyIcon="true"
    />
  </div>
</template>

<style scoped></style>
