import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    OnModuleInit
} from '@nestjs/common';
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
        return this.questionnaireRepository.findOne(questionnaire.id)
            .then(result => {
                if (result === undefined) throw new BadRequestException();
                return this.questionnaireRepository.save(questionnaire)
                    .then(value => {})
                    .catch(reason => {
                        throw new InternalServerErrorException();
                    });
            });
    }

    delete(idQuestionnaire: number): Promise<void> {
        return this.questionnaireRepository.findOne(idQuestionnaire)
            .then(
                result => {
                    if(result === undefined) throw new BadRequestException();
                    return this.questionnaireRepository.remove(result)
                        .then(
                            value => {},
                            reason => {
                                throw new InternalServerErrorException();
                            }
                        );
                },
                reason => {
                    throw new InternalServerErrorException();
                }
            );
    }

}
