import { Request, Response, NextFunction } from 'express';

import {
  getAllUsers,
  getUserById,
  deleteUser,
  createUser,
} from "./user.services";
import log from '../../logger'
import { sendNodeMailer } from '../../utils/emails';

export async function handleAllGetUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    log.error(error)
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
    log.error(error)
    return res.status(500).json(error);
  }
}

export async function handleCreateUser(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    // const user = await createUser(data);

    // TODO: Send email to user
    const emailData = {
      from: 'No reply <cristian.moreno@makeitreal.camp>',
      to: data.email,
      subject: 'Welcome to Make it Real',
      text: 'Welcome to Make it Real',
      html: '<b>Welcome to Make it Real</b>',
      attachments: [
        {
          filename: 'text1.txt',
          content: 'hello world!'
        }
      ]
    }

    await sendNodeMailer(emailData)

    return res.status(201).json(data);
  } catch (error: any) {
    log.error(error)
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
    log.error(error)
    return res.status(500).json(error);
  }
}
