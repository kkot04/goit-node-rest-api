import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} from "../controllers/contactsController.js";
import validateBody from "../decorators/validateBody.js";
import {
  createContactSchema,
  favoriteSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

import isValidId from "../middlewares/isValidId.js";

import authenticate from "../middlewares/authenticate.js";

import upload from '../middlewares/upload.js'

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", upload.single("avatarUrl"), validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(favoriteSchema),
  updateFavorite
);

export default contactsRouter;
