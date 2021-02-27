import { Module } from '@nestjs/common';
import {QuestionnaireService} from "./services/questionnaire.service";
import {EditModule} from "./edit/edit.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Questionnaire} from "./entities/questionnaire.entity";
import {Question} from "./entities/question.entity";
import {Answer} from "./entities/answer.entity";

@Module({
    providers: [],
    imports: [
        EditModule
    ]
})
export class QuestionnaireModule {}
