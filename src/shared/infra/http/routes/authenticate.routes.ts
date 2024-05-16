import { Router } from "express";
import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticationRoutes = Router();

const createUserController = new AuthenticateUserController();

authenticationRoutes.post("/sessions", createUserController.handle);

export { authenticationRoutes };
