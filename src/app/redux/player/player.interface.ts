
export interface IPlayerState {
  quiz: IPlayerQuizState,
  playerId: String,
  question: IPlayerQuestion,
  answers: IPlayerAnswer[],
}

export interface IPlayerQuizState {
  id: String,
  token: String,
  title: String,
  mailRequired: Boolean,
  telephoneNumberRequired: Boolean,
}

export interface IPlayer {
  id: string
}

export interface IPlayerQuestion {
  questionId: String,
  value: String,
}

export interface IPlayerAnswer {
  answerId: String,
  value: String,
}
