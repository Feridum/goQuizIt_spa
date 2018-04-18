
export interface IQuizState {
  unactiveQuizList:  {[id: string]: IUnactiveQuiz};
  activeQuizList: {[id: string]: IActiveQuiz};
  finishedQuizList: {[id: string]: IFinishedQuiz};
}


export interface IUnactiveQuiz {
  id: string;
  name: string;
  status: IQuizStatus;
}

export interface IActiveQuiz {
  id: string;
  name: string;
  status: IQuizStatus;
}


export interface IFinishedQuiz {
  id: string;
  name: string;
  status: IQuizStatus;
}

export type IQuizStatus = 'unactive' | 'active' | 'finished';
