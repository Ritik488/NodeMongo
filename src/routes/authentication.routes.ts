import { Router } from "express";
import { AuthenticationController } from "../controllers/authentication.controller";

const authRouter = Router();

authRouter.get("/signin",AuthenticationController.signin);
authRouter.post("/signup", AuthenticationController.signup);

export {authRouter};