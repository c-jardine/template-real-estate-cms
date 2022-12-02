export interface FaqQuestionProps {
  _key: string;
  question: string;
  answer: string;
}

export interface FaqPageProps {
  questions: FaqQuestionProps[];
}
