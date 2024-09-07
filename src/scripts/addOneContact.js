import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';
import { createFakeContact } from '../utils/createFakeContact';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
  } catch (error) {
    console.error('Error adding contact: ', error);
  }
};

addOneContact();
