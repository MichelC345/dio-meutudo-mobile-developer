//repositories/person-repository.ts
import { PersonModel } from "../models/person-model";
import fs from 'fs/promises';

const personDatabase: PersonModel[] = require('../data/person-data.json');

export const findAllPersons = async (): Promise<PersonModel[]> => {
    return personDatabase;
}