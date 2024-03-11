import Contact from "../models/Contact.js";

export const contactsList = () => Contact.find({}, "-createdAt -updatedAt");

export const getContactById = async (id) => {
  return Contact.findById(id);
};

export const removeContact = async (id) => Contact.findByIdAndDelete(id);

export const addContact = async (data) => Contact.create(data);

export const updateContactById = async (id, data) =>
  Contact.findByIdAndUpdate(id, data);

export const updateStatusContact = async (id, data) =>
  Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
