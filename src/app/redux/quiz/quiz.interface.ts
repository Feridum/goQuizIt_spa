
export interface IQuizState {
  unactiveQuizList:  {[id: string]: IUnactiveQuiz};
}


export interface IUnactiveQuiz {
  id: string;
  name: string;
  status: IQuizStatus;
}

export type IQuizStatus = 'unactive' | 'active' | 'finished';
