
export interface IQuestionsState {
  questions: {[id: string]: IQuestion[]};
}


export interface IQuestion {
  question: {
    questionId: string;
    value: string
  };
  answers: IQuestionAnswer[];
  image?: string;
  youtube?: string;
}


export interface  IQuestionAnswer {
  id: string;
  name: string;
  isCorrect: boolean;
}
