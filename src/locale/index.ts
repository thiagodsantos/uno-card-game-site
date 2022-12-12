import enUS from './en-US';
import ptBR from './pt-BR';

type RoomMessages = {
  create: string;
  join: string;
  joinInput: string;
};

export type Messages = {
  room: RoomMessages;
};

export default {
  ptBR,
  enUS,
};
