import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact remove successfull!');
  } catch (error) {
    console.log('Failed to delete contact from the file: ', error);
  }
};

removeLastContact();
