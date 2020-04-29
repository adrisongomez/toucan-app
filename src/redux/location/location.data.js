import faker from 'faker';
import {v5} from 'uuid';
const data = {
  id: v5('toucan.com', v5.DNS),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  locations: [
    {
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    },
  ],
};
