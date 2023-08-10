"use server";

import { User } from "../models/user.models";
import { connectedToDb } from "../mongoose";

export async function updateUser(
  userId: string,
  username: string
): Promise<void> {
  connectedToDb();

  await User.findOneAndUpdate(
    { id: userId },
    { username: username.toLowerCase() }
  );
}
