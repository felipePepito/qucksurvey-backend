import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post} from '@nestjs/common';

import {QuestionnaireService} from "../../../services/questionnaire.service";
import {Questionnaire} from "../../../entities/questionnaire.entity";
import {QuestionnaireDto} from "../../../dto/questionnaire.dto";
import {DtoConverterService} from "../../dto-converter/dto-converter.service";
import {AnswerDto} from "../../../dto/answer.dto";

@Controller('edit')
export class EditController {

    constructor(
        private questionnaireService: QuestionnaireService,
        private dtoConverterService: DtoConverterService) {
    }

    @Get()
    async findAll(): Promise<Array<Questionnaire>> {
        return await this.questionnaireService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Questionnaire> {
        return await this.questionnaireService.findOne(id);
    }

    @Post('create')
    create(@Body() qdto: QuestionnaireDto) {
        this.questionnaireService.create(this.dtoConverterService.questionnaireDtoToEntity(qdto));
    }

    @Post('update')
    async update(@Body() qdto: QuestionnaireDto) {
        if(qdto.id === undefined) {
            throw new HttpException("Halt die Fresse.", HttpStatus.BAD_REQUEST);
        }

        await this.questionnaireService.update(this.dtoConverterService.questionnaireDtoToEntity(qdto)).catch(
            reject => { throw new HttpException("Questionnaire doesn't exist", HttpStatus.BAD_REQUEST)}
        );
    }

    // @Delete('delete')
    // delete(id: number) {
    //
    // }
}
