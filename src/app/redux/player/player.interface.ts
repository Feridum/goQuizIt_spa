export interface IPlayerState {
  quiz: IPlayerQuizState;
  playerId: String;
  question: IPlayerQuestion;
  answers: IPlayerAnswer[];
  questionIndex: number;
  numberOfQuestions: number;
}

export interface IPlayerQuizState {
  id: String;
  token: String;
  title: String;
  mailRequired: Boolean;
  telephoneNumberRequired: Boolean;
}

export interface IPlayer {
  id: string;
}

export interface IPlayerQuestion {
  questionId: String;
  value: String;
  type: string;
}

export interface IPlayerAnswer {
  answerId: string;
  value: String;
}
