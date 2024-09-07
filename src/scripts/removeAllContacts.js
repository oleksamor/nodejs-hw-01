import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const removeAllContacts = async () => {
  try {
    contacts = await readContacts();
    contacts.length = 0;
    await writeContacts(contacts);
    console.log('All contacts remove successfull!');
  } catch (error) {
    console.error('Filed to remove all contacts!', error);
  }
};

removeAllContacts();
