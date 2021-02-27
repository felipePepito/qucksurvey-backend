import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "./question.entity";

@Entity()
export class Questionnaire {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    createdAt: Date;

    @OneToMany(() => Question, question => question.questionnaire, {
        cascade: true
    })
    questions: Array<Question>;



}
