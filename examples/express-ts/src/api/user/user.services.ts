import User from "./user.model";

export function getAllUsers() {
  return User.find({}, { password: 0 });
}

export function getUserById(id) {
  const user = User.findById(id);
  return user;
}

export function getUserByField(field, value) {

}

export function createUser(user) {
  return User.create(user);
}

export function updateUser(id, user) {
  const updatedUser = User.findByIdAndUpdate(id, user, { new: true });
  return updatedUser;
}

export function deleteUser(id) {
  const deletedUser = User.findByIdAndDelete(id);
  return deletedUser;
}
