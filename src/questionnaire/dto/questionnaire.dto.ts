import { Question } from './question';

export class Questionnaire {
  id: number;
  title: string;
  createdAt: Date;
  questions: Array<Question>;
}
