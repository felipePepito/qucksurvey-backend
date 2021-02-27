import { AnswerDto } from './answer.dto';
import {Question} from "../entities/question.entity";
import {IsArray, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class QuestionDto {
  @IsString()
  text: string;

  @IsArray()
  @ValidateNested({each: true})
  @Type(() => AnswerDto)
  answers: Array<AnswerDto>;
}
