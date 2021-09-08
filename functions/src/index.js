import { functions as userFunctions } from './users';
import {functions as reservationFunctions } from './reservations';

import { functions as restaurantFunctions} from './restaurants'

export default {
    ...userFunctions,
    ...reservationFunctions,
    ...restaurantFunctions,
};