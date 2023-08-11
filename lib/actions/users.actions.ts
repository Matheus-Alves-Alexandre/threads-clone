"use server";

import { revalidatePath } from "next/cache";
import { User } from "../models/user.models";
import { connectedToDb } from "../mongoose";

export async function updateUser(
  userId: string,
  username: string,
  name: string,
  bio: string,
  image: string,
  path: string
): Promise<void> {
  connectedToDb();

  await User.findOneAndUpdate(
    { id: userId },
    { username: username.toLowerCase(), name, bio, image, onboarded: true },
    { upsert: true }
  );
  try {
    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (e) {
    throw new Error(`failed to create/updade ,${e}`);
  }
}
