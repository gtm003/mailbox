import faker from '@faker-js/faker';
import { orderBy } from 'lodash';

import { NUMBER_OF_LETTERS } from '../constants/constants';
import { Folder } from '../ts/enums/enums';
import { Letter } from '../ts/models/letter.model';

faker.seed(1);

const folders: Folder[] = Object.values(Folder);
const letters: Letter[] = [];

for (let i = 0; i < NUMBER_OF_LETTERS; i++) {
  const folder = faker.random.arrayElement(folders);

  letters.push({
    id: i,
    folder: folder,
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: `${faker.name.firstName()}_${faker.name.lastName()}@domen.com`,
    text: faker.lorem.sentence(250),
    date: faker.date.past(),
    isRead: [Folder.Drafts, Folder.Sent].includes(folder) || faker.datatype.boolean(),
  });
}

export default orderBy(letters, ['date'], ['desc']);
