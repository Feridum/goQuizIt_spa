
export interface IQuizState {
  unactiveQuizList: IUnactiveQuiz[];
}


export interface IUnactiveQuiz {
  id: string;
  name: string;
  status: IQuizStatus;
}

export type IQuizStatus = 'unactive' | 'active' | 'finished';
