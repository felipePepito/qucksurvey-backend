import {HttpException, HttpStatus, Injectable, OnModuleInit} from '@nestjs/common';
import {Questionnaire} from "../entities/questionnaire.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class QuestionnaireService implements OnModuleInit{

    constructor(
        @InjectRepository(Questionnaire)
        private questionnaireRepository: Repository<Questionnaire>
    ) {}

    onModuleInit() {
        // this.questionnaireRepository.save(questionnaires);
    }


    findAll(): Promise<Array<Questionnaire>> {
        return this.questionnaireRepository.find({
            relations: ["questions", "questions.answers"]
        });
    }

    findOne(id): Promise<Questionnaire> {
        return this.questionnaireRepository.findOne(id, {
            relations: ["questions", "questions.answers"]
        });
    }

    create(questionnaire: Questionnaire) {
        this.questionnaireRepository.save(questionnaire);
    }

    update(questionnaire: Questionnaire): Promise<void> {
        return new Promise<void> ((resolve, reject) => {
            this.questionnaireRepository.findOne(questionnaire.id).then(
                result => {
                    if (result === undefined) {
                        reject();
                    } else {
                        this.questionnaireRepository.save(questionnaire);
                        resolve();
                    }
                }
            );
        })
        // make sure questionnaire with given id already exists in database


    }

    //     const index =this.questionnaires.indexOf(this.questionnaires.find(q => q.id === questionnaire.id));
    //     this.questionnaires.splice(index, 1, questionnaire);
    //
    // delete(id: number) {
    //     this.questionnaires.splice(id, 1);
    // }
}
