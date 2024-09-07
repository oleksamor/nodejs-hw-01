import { log } from 'node:console';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts; ', error);
  }
};
readContacts();
