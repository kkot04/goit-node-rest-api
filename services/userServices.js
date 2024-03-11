import User from "../models/User.js";

export const findUser = (filter) => User.findOne(filter);

export const findUserById = (id) => User.findById(id);

export const updateAvatar = (id, avatarURL) =>
  User.findByIdAndUpdate(id, { avatarURL });
