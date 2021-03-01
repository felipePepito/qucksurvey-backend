import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post
} from '@nestjs/common';

import {QuestionnaireService} from "../../../services/questionnaire.service";
import {Questionnaire} from "../../../entities/questionnaire.entity";
import {QuestionnaireDto} from "../../../dto/questionnaire.dto";
import {DtoConverterService} from "../../dto-converter/dto-converter.service";

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
        // existence of id is not validated via class-validator, therefore validated here
        if(qdto.id === undefined) {
            throw new BadRequestException();
        }

        await this.questionnaireService.update(this.dtoConverterService.questionnaireDtoToEntity(qdto))
            .catch(
                reason => { throw reason; }
            );
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.questionnaireService.delete(id)
            .catch(
                reason => { throw reason; }
            )
    }
}
