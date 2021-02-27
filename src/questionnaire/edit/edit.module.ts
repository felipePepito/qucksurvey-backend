import { Module } from '@nestjs/common';
import {EditController} from "./controller/edit/edit.controller";
import {QuestionnaireService} from "../services/questionnaire.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Questionnaire} from "../entities/questionnaire.entity";
import {Question} from "../entities/question.entity";
import {Answer} from "../entities/answer.entity";

@Module({
    controllers: [EditController],
    providers: [QuestionnaireService],
    imports: [TypeOrmModule.forFeature([Questionnaire, Question, Answer])]
})
export class EditModule {}

