import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { config } from "../.env.local";
import { UsersModule } from './users/users.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import {Questionnaire} from "./questionnaire/entities/questionnaire.entity";
import {Question} from "./questionnaire/entities/question.entity";
import {Answer} from "./questionnaire/entities/answer.entity";
import {EditModule} from "./questionnaire/edit/edit.module";

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      UsersModule,
      QuestionnaireModule,
      EditModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
