import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    avatarUrl: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: null }
);

contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", setUpdateSetting);

contactSchema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
