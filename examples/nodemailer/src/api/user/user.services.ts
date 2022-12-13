import { DocumentDefinition, FilterQuery } from "mongoose";

import User, { UserDocument } from "./user.model";

export function getAllUsers() {
  return User.find({});
}

export function getUserById(id: string) {
  const user = User.findById(id);
  return user;
}

export function getUser(filter: FilterQuery<UserDocument>) {
  const user = User.findOne(filter);
  return user;
}

export function createUser(
  input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>
) {
  return User.create(input);
}

export function updateUser(
  id: string,
  user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>
) {
  const updatedUser = User.findByIdAndUpdate(id, user, { new: true });
  return updatedUser;
}

export function deleteUser(id: string) {
  const deletedUser = User.findByIdAndDelete(id);
  return deletedUser;
}
