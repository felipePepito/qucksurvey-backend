import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';

import {QuestionnaireService} from "../../../services/questionnaire.service";
import {Questionnaire} from "../../../entities/questionnaire.entity";
import {QuestionnaireDto} from "../../../dto/questionnaire.dto";

@Controller('edit')
export class EditController {

    constructor(private questionnaireService: QuestionnaireService) {
    }

    @Get()
    async findAll(): Promise<Array<Questionnaire>> {
        return await this.questionnaireService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Questionnaire> {
        return await this.questionnaireService.findOne(params.id);
    }

    @Post('create')
    create(@Body() questionnaire: QuestionnaireDto) {
        console.log(questionnaire.toEntity());
        // this.questionnaireService.create(questionnaire.toEntity());
    }


    // @Post('update')
    // update(questionnaire: QuestionnaireDto) {
    //     this.questionnaireService.update(questionnaire);
    // }
    //
    // @Delete('delete')
    // delete(id: number) {
    //
    // }
}
