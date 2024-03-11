import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSetting } from "./hooks.js";

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactsSchema.post("save", handleSaveError);

contactsSchema.pre("findOneAndUpdate", setUpdateSetting);

contactsSchema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contactsSchema);

export default Contact;
