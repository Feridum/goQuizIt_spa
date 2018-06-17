export interface IQuestionsState {
  questions: { [id: string]: IQuestion[] };
}

export interface IQuestion {
  question: {
    questionId: string;
    value: string
    type: string
  };
  answers: IQuestionAnswer[];
  image?: string;
  youtube?: string;
}

export interface IQuestionAnswer {
  id: string;
  name: string;
  positive: boolean;
}
