import {Answer} from "../entities/answer.entity";
import {IsString} from "class-validator";

export class AnswerDto {
  @IsString()
  text: string;
}
