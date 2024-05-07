import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token Missing");
  }

  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId } = verify(token, "5729c7e26108b3e23b961bb04b17f45e") as IPayload;
    console.log("sub", userId);
    const userRepository = new UserRepository();
    const user = await userRepository.findById(userId);
    console.log("USER", user);
    if (!user) {
      throw new Error("User does not exists");
    }
    next();
  } catch (err) {
    throw new Error(err);
  }
}
