import Joi from "joi";

import { emailRegexp } from "../constants/regexp.js";

export const signupSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().default("starter"),
});

export const signinSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().default("starter"),
});

export const verifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});
