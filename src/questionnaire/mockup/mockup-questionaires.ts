import {Questionnaire} from '../entities/questionnaire.entity';
import {Answer} from '../entities/answer.entity';
import {cloneDeep} from 'lodash';
import {Question} from "../entities/question.entity";



const answer1 = new Answer();
answer1.text = "Weil halt Bruder.";
const answer2 = new Answer();
answer2.text = "Keinen Plan digger.";

const question1 = new Question();
question1.text = "Warum ist die Banana dick?";
question1.answers = new Array<Answer>();
question1.answers.push(answer1);
question1.answers.push(answer2);

const questionnaire1 = new Questionnaire();
questionnaire1.title = "Erster Fragebogen";
questionnaire1.createdAt = new Date();
questionnaire1.questions = new Array<Question>();
questionnaire1.questions.push(question1);

export const questionnaires: Array<Questionnaire> = [questionnaire1];


