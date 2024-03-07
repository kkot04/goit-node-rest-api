import contactsService from "../services/contactsServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res) => {
    const allContacts = await contactsService.listContacts()
    res.json(allContacts)
};

export const getOneContact = async (req, res) => {
    const {id} = req.params;

    const oneContact = await contactsService.getContactById(id)
    if (!oneContact) {
        throw HttpError(404);
      }
      res.json(oneContact);

};

export const deleteContact = async (req, res) => {
    const { id } = req.params;

    const delContact = await contactsService.removeContact(id)

    if (!delContact) {
      throw HttpError(404);
    }
    res.status(204).send();
};

export const createContact = async (req, res) => {
    const newContact = await contactsService.addContact(req.body);
    res.status(201).json(newContact)
};

export const updateContact = async (req, res) => {
    const {id} = req.params;
    const upContact = await contactsService.updateContact(id, req.body)

    if(!upContact) {
        throw HttpError(404)
    }
    res.json(upContact)
};

export default {
    getAllContacts: ctrlWrapper(getAllContacts),
    getOneContact: ctrlWrapper(getOneContact),
    deleteContact: ctrlWrapper(deleteContact),
    createContact: ctrlWrapper(createContact),
    updateContact: ctrlWrapper(updateContact),
  };
