import faker from '@faker-js/faker';

import { NUMBER_OF_LETTERS } from '../constants/constants';
import { Folder } from '../ts/enums/enums';
import { Letter } from '../ts/models/letter.model';

faker.seed(1);

const folders: Folder[] = Object.values(Folder);
const letters: Letter[] = [];

for (let i = 0; i < NUMBER_OF_LETTERS; i++) {
  letters.push({
    id: i,
    folder: faker.random.arrayElement(folders),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: `${faker.name.firstName()}_${faker.name.lastName()}@domen.com`,
    text: faker.lorem.sentence(200),
    date: faker.date.past(),
    isRead: faker.datatype.boolean(),
  });
}

export default letters;
