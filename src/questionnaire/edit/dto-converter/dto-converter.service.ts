import { Injectable } from '@nestjs/common';
import {QuestionnaireDto} from "../../dto/questionnaire.dto";
import {Questionnaire} from "../../entities/questionnaire.entity";
import {QuestionDto} from "../../dto/question.dto";
import {Question} from "../../entities/question.entity";
import {AnswerDto} from "../../dto/answer.dto";
import {Answer} from "../../entities/answer.entity";

@Injectable()
export class DtoConverterService {

    questionnaireDtoToEntity(qdto: QuestionnaireDto): Questionnaire {
        const questionnaire = new Questionnaire();
        questionnaire.title = qdto.title;
        questionnaire.createdAt = qdto.createdAt;
        questionnaire.questions = [];
        for(const questiondto of qdto.questions) {
            questionnaire.questions.push(this.questionToDtoEntity(questiondto));
        }
        return questionnaire;
    }

    questionToDtoEntity(qdto: QuestionDto): Question {
        const question = new Question();
        question.text = qdto.text;
        question.answers = [];

        for(const adto of qdto.answers) {
            question.answers.push(this.answerDtoToEntity(adto));
        }
        return question;
    }

    answerDtoToEntity(adto: AnswerDto): Answer {
        const answer = new Answer();
        answer.text = adto.text;
        return answer;
    }
}
