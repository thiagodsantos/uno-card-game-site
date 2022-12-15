<script setup lang="ts">
import { ref, watch } from 'vue';
import { i18n } from '@/main';
import Icons from '@/icons';
import Button from '@/components/ui/ButtonComponent.vue';
import InputText from '@/components/ui/InputTextComponent.vue';
import InputButtonComponent from '@/components/ui/InputButtonComponent.vue';

// TODO: Remover e mover setup e events do socket para outra pasta
import { io } from 'socket.io-client';

const socket = io('http://localhost:8003');
socket.on('connect', () => {
  console.log(socket.id);
});

enum ButtonEventsEnum {
  create = 'home.button.create',
  join = 'home.button.join',
}

enum ButtonActiveEnum {
  unselected = 'p-button-text',
  selected = 'p-button-raised',
}

enum ButtonStyleEnum {
  join = 'p-button-help',
  create = 'p-button-success',
}

const placeholderPlayerName = i18n.global.t(
  'home.input.placeholder.playerName'
);
const placeholderRoom = i18n.global.t('home.input.placeholder.roomId');

const showInputs = ref(false);
const disableInput = ref(false);
const enterRoom = ref('');
const buttonClass = ref('');
const buttonIcon = ref('');
const joinSelected = ref(ButtonActiveEnum.unselected);
const createSelected = ref(ButtonActiveEnum.selected);

const joinRoom = () => {
  showInputs.value = true;
  disableInput.value = false;
  enterRoom.value = ButtonEventsEnum.join;
  buttonIcon.value = Icons.arrowCircleRight;
  buttonClass.value = ButtonStyleEnum.join;
};

const createRoom = () => {
  enterRoom.value = ButtonEventsEnum.create;
  showInputs.value = true;
  disableInput.value = true;
  buttonIcon.value = Icons.bolt;
  buttonClass.value = ButtonStyleEnum.create;
};

const handlerEnterRoom = () => {
  console.log('Conexão com socket...');
};

watch(enterRoom, (newValue: string) => {
  if (newValue === ButtonEventsEnum.join) {
    joinSelected.value = ButtonActiveEnum.selected;
  }

  if (newValue === ButtonEventsEnum.create) {
    joinSelected.value = ButtonActiveEnum.unselected;
  }
});

watch(joinSelected, (newValue: ButtonActiveEnum) => {
  if (newValue === ButtonActiveEnum.selected) {
    createSelected.value = ButtonActiveEnum.unselected;
  }
});

watch(createSelected, (newValue: ButtonActiveEnum) => {
  if (newValue === ButtonActiveEnum.selected) {
    joinSelected.value = ButtonActiveEnum.unselected;
  }
});
</script>

<template>
  <span class="template p-buttonset">
    <Button
      id="button-room-join"
      :class="`${joinSelected} ${ButtonStyleEnum.join}`"
      :text="ButtonEventsEnum.join"
      icon="pi-user-plus"
      @click="joinRoom"
    />
    <Button
      id="button-room-create"
      :class="`${createSelected} ${ButtonStyleEnum.create}`"
      :text="ButtonEventsEnum.create"
      icon="pi-plus"
      @click="createRoom"
    />
    <div v-if="showInputs">
      <InputText
        id="player-name"
        class="input-room"
        :placeholder="placeholderPlayerName"
      />
      <InputButtonComponent
        class="input-room"
        buttonId="button-enter-room"
        :buttonClick="handlerEnterRoom"
        :buttonIcon="buttonIcon"
        :buttonClass="buttonClass"
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
