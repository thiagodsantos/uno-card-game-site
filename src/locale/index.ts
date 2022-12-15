import enUS from './en-US';

type HomeMessages = {
  button: {
    create: string;
    join: string;
  };
  input: {
    placeholder: {
      playerName: string;
      roomId: string;
    };
  };
};

export type Messages = {
  home: HomeMessages;
};

export default {
  enUS,
};
