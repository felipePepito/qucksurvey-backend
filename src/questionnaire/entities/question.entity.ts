import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Answer} from "./answer.entity";
import {Questionnaire} from "./questionnaire.entity";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @OneToMany(() => Answer, answer => answer.question, {
        cascade: true
    })
    answers: Array<Answer>;

    @ManyToOne(() => Questionnaire, questionnaire => questionnaire.questions)
    questionnaire: Questionnaire;
}
