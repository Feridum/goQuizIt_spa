
export interface IQuizState {
  inactiveQuizList:  {[id: string]: IUnactiveQuiz};
  activeQuizList: {[id: string]: IActiveQuiz};
  finishedQuizList: {[id: string]: IFinishedQuiz};
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

export type IQuizStatus = 'INACTIVE' | 'ACTIVE' | 'FINISHED';
