<script setup lang="ts">
import { ref, watch } from 'vue';
import { i18n } from '@/main';
import Button from '@/components/ui/ButtonComponent.vue';
import InputText from '@/components/ui/InputTextComponent.vue';
import InputButtonComponent from '@/components/ui/InputButtonComponent.vue';

enum EnterRoomEnum {
  create = 'room.create',
  join = 'room.join',
}

const classUnselected = 'p-button-text';

const showInputs = ref(false);
const disableInput = ref(false);
const enterRoom = ref('');
const joinSelected = ref('p-button-text');
const createSelected = ref(classUnselected);

const placeholderPlayerName = i18n.global.t('room.playerName');
const placeholderRoom = i18n.global.t('room.joinInput');

const joinRoom = () => {
  showInputs.value = true;
  disableInput.value = false;
  enterRoom.value = EnterRoomEnum.join;
};

const createRoom = () => {
  enterRoom.value = EnterRoomEnum.create;
  showInputs.value = true;
  disableInput.value = true;
};

watch(enterRoom, (newValue: string) => {
  const classSelected = 'p-button-raised';

  if (newValue === EnterRoomEnum.join) {
    joinSelected.value = classSelected;
    createSelected.value = classUnselected;
  }

  if (newValue === EnterRoomEnum.create) {
    joinSelected.value = classUnselected;
    createSelected.value = classSelected;
  }
});
</script>

<template>
  <span class="template p-buttonset">
    <Button
      id="button-room-join"
      :class="joinSelected + ' p-button-help'"
      :text="EnterRoomEnum.join"
      icon="pi-user-plus"
      @click="joinRoom"
    />
    <Button
      id="button-room-join"
      :class="createSelected + ' p-button-success'"
      :text="EnterRoomEnum.create"
      icon="pi-plus"
      @click="createRoom"
    />
    <InputText
      v-if="showInputs"
      id="player-name"
      class="input-room"
      :placeholder="placeholderPlayerName"
    />
    <div v-if="showInputs">
      <InputButtonComponent
        v-if="enterRoom === EnterRoomEnum.create"
        buttonIcon="pi-bolt"
        buttonClass="p-button-success"
        class="input-room"
        :disabled="disableInput"
        :placeholder="placeholderRoom"
      />
      <InputButtonComponent
        v-if="enterRoom === EnterRoomEnum.join"
        buttonIcon="pi-bolt"
        buttonClass="p-button-help"
        class="input-room"
        :disabled="disableInput"
        :placeholder="placeholderRoom"
      />
    </div>
  </span>
</template>

<style scoped>
.input-room {
  margin-top: 10px;
}
</style>
