import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let index = 0; index < number; index++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log('Contacts added succefull!');
  } catch (error) {
    console.error('failed to read contacts from the file:', error);
  }
};

generateContacts(5);
