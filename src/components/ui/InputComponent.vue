<script setup lang="ts">
import InputText from 'primevue/inputtext';

defineProps({
  id: String,
  placeholder: String,
  disabled: Boolean,
});
</script>

<template>
  <span class="p-float-label">
    <InputText
      :id="id"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <label :for="id"></label>
  </span>
</template>

<style scoped>
input {
  width: 100%;
}
</style>
