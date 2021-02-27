import { QuestionDto } from './question.dto';
import {IsArray, IsDateString, IsNumber, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class QuestionnaireDto {

  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsDateString()
  createdAt: Date;

  @IsArray()
  @ValidateNested({each: true})
  @Type(() => QuestionDto)
  questions: Array<QuestionDto>;

}
