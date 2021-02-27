import {Questionnaire} from '../../model/questionnaire';
import {Answer} from '../../model/answer';
import {cloneDeep} from 'lodash';
import {uuid} from '../../utilities/uuid';

const answers: Array<Answer> = [
  {
    text: 'Dont know..',
    chosen: false
  },
  {
    text: 'Hmmmm..',
    chosen: false
  }
];

const questionnaire1: Questionnaire = {
  id: uuid(),
  title: 'My first questionaire',
  createdAt: new Date(),
  questions:  [
    {
      text: 'Why so sad my dear?',
      answers: cloneDeep(answers)
    },
    {
      text: 'Would you like to cheer up?',
      answers: cloneDeep(answers)
    }
  ]
};

const questionnaire2: Questionnaire = {
  id: uuid(),
  title: 'There is so much to know',
  createdAt: new Date(2021,2,4),
  questions:  [
    {
      text: 'Why is the banana curved?',
      answers: cloneDeep(answers)
    },
    {
      text: 'Is there a god??',
      answers: cloneDeep(answers)
    }
  ]
};

const questionnaire3: Questionnaire = cloneDeep(questionnaire1);
questionnaire3.id = uuid();
questionnaire3.title = 'How high the noon.';
questionnaire3.createdAt = new Date();

const questionnaire4: Questionnaire = cloneDeep(questionnaire1);
questionnaire4.id = uuid();
questionnaire4.title = 'Spielen wie die Kinder';
questionnaire4.createdAt = new Date(2021,1,20);

export const Questionnaires: Array<Questionnaire> = [
  questionnaire1,
  questionnaire2,
  questionnaire3,
  questionnaire4
];
