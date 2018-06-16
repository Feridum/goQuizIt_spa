export interface IQuizState {
  inactiveQuizList: { [id: string]: IUnactiveQuiz };
  activeQuizList: { [id: string]: IActiveQuiz };
  finishedQuizList: { [id: string]: IFinishedQuiz };
  results: { [id: string]: IQuizResult };
}

export interface IUnactiveQuiz {
  id: string;
  title: string;
  state: IQuizStatus;
}

export interface IActiveQuiz {
  id: string;
  title: string;
  state: IQuizStatus;
}

export interface IFinishedQuiz {
  id: string;
  title: string;
  state: IQuizStatus;
}

export interface IQuizPlayer {
  name: string;
  surname: string;
  telephoneNumber: string;
  mail: string;
}

export interface IQuizResult {
  player: IQuizPlayer;
  result: string;
  quiz: string;
  answers: IQuizResultAnswer[];
}

export interface IQuizResultAnswer {
  question: string;
  playerAnswers: string[];
  positiveAnswers: string[];
}

export type IQuizStatus = 'INACTIVE' | 'ACTIVE' | 'FINISHED';
