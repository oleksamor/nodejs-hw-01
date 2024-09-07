import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let index = 0; index < number; index += 1) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log('Contacts added succefull!');
  } catch (error) {
    console.error('failed to read contacts from the file:', error);
  }
};

generateContacts(2);
