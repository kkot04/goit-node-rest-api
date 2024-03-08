import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");
function dataRewrite(contacts) {
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

export async function contactsList() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

export async function getContactById(contactId) {
  const dataById = await contactsList();
  const contactById = dataById.find((item) => item.id === contactId);
  return contactById || null;
}

export async function removeContact(contactId) {
  const dataForDelete = await contactsList();
  const contactToDelete = dataForDelete.findIndex(
    (item) => item.id === contactId
  );
  if (contactToDelete === -1) {
    return null;
  }
  const dataUpdated = dataForDelete.splice(contactToDelete, 1);
  dataRewrite(dataForDelete);
  return dataUpdated;
}

export async function addContact(name, email, phone) {
  const dataForAdd = await contactsList();
  const contactNew = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  dataForAdd.push(contactNew);
  await dataRewrite(dataForAdd);
  return contactNew;
}

export async function updateContactById(id, data) {
  const contacts = await contactsList();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { ...contacts[index], ...data };
  dataRewrite(contacts);
  return contacts[index];
}