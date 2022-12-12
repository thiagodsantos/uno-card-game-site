<script setup lang="ts">
import { ref } from 'vue';
import { i18n } from '@/main';
import Button from '@/components/ui/Button.vue';
import InputText from '@/components/ui/Input.vue';

const showInput = ref(false);
const disableInput = ref(false);
const enterRoom = ref('');
const placeholderRoom = ref('');

const createRoom = () => {
  showInput.value       = true;
  enterRoom.value       = 'room.create';
  disableInput.value    = true;
  placeholderRoom.value = i18n.global.t('');
}

const joinRoom = () => {
  enterRoom.value       = 'room.join';
  showInput.value       = true;
  disableInput.value    = false;
  placeholderRoom.value = i18n.global.t('room.joinInput');
}
</script>

<template>
  <span class="template p-buttonset">
    <Button
      class="p-button-text p-button-success"
      text="room.create"
      icon="pi-plus"
      @click="createRoom"
    >
    </Button>
    <Button
      class="p-button-text p-button-help"
      text="room.join"
      icon="pi-user-plus"
      @click="joinRoom"
    >
    </Button>
    <InputText
      v-if="showInput"
      class="input-room-id"
      id="room-id"
      :disabled="disableInput"
      :placeholder="placeholderRoom"
    >
    </InputText>
  </span>
</template>

<style scoped>
.input-room-id {
  margin-top: 10px;
}
</style>