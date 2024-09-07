import { readContacts } from '../utils/readContacts';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts: ', error);
    throw error;
  }
};

console.log(await countContacts());
