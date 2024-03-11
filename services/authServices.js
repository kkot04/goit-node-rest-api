import bcrypt from "bcrypt";

import User from "../models/User.js";

export const signup = async (data, avatar) => {
  const { password } = data;
  const hashPassword = await bcrypt.hash(password, 10);
  return User.create({ ...data, password: hashPassword, avatarURL: avatar });
};

export const setToken = async (id, token = "") =>
  User.findByIdAndUpdate(id, { token });
