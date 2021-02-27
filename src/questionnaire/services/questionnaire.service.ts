import { Injectable } from '@nestjs/common';
import {Questionnaires} from "../mockup/mockup-questionaires";
import {Questionnaire} from "../model/questionnaire";

@Injectable()
export class QuestionnaireService {
    private readonly questionnaires = Questionnaires;

    create(questionnaire: Questionnaire) {
        this.questionnaires.push(questionnaire);
    }

    findAll() {
        return this.questionnaires;
    }

    update(questionnaire: Questionnaire) {
        const index =this.questionnaires.indexOf(this.questionnaires.find(q => q.id === questionnaire.id));
        this.questionnaires.splice(index, 1, questionnaire);
    }

    delete(id: number) {
        this.questionnaires.splice(id, 1);
    }
}
