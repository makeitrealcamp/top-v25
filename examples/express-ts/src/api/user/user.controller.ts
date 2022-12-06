import { Request, Response, NextFunction } from 'express';

import {
  getAllUsers,
  getUserById,
  deleteUser,
  createUser,
  getUser,
} from "./user.services";

export async function handleAllGetUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log("🚀 handleAllGetUsers ~ error", error)
    return res.status(500).json(error);
  }
}

export async function handleGetUser(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user.profile);
  } catch(error) {
    console.log("🚀 handleGetUser ~ error", error)
    return res.status(500).json(error);
  }
}

export async function handleCreateUser(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    const user = await createUser(data);

    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
}

export async function handleUpdateUser(req: Request, res: Response, next: NextFunction) {}

export async function handleDeleteUser(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await deleteUser(id);

    return res.status(200).json({ message: "User deleted" });
  } catch(error) {
    return res.status(500).json(error);
  }
}


export async function handleLoginUser(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const user = await getUser({ email });
    console.log("🚀 ~ file: user.controller.ts:67 ~ handleLoginUser ~ user", user)

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await user.comparePassword(password)

    return res.status(200).json({ message: "User logged in", validPassword });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
}
