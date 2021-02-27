import { Answer } from './answer';

export interface QuestionDto {
  text: string;
  answers: Array<Answer>;
}
