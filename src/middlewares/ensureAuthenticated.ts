import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../errors/AppErros";

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
    throw new AppError("Token Missing", 401);
  }

  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId } = verify(token, "5729c7e26108b3e23b961bb04b17f45e") as IPayload;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new AppError("User does not exists", 401);
    }
    request.user = { id: userId };
    next();
  } catch (err) {
    throw new AppError("Invalid Token", 401);
  }
}
