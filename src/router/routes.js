import { PUBLIC } from './constants';

import AddPeople from '../views/AddPeople';
import Relations from '../views/Relations';

const publiRoutes = [
  {
    path: PUBLIC.ADD_PEOPLE.path,
    Component: AddPeople
  },
  {
    path: PUBLIC.RELATIONS.path,
    Component: Relations
  }
]

export default publiRoutes