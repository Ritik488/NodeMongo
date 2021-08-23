import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import dotenv from "dotenv";

dotenv.config();
class AuthenticationController {

    static async signin(req: Request, res: Response) {
        let jwt_secret_key = process.env.JWT_SECRET_KEY as string;
        let token = req.headers.authorization as string;
        console.log(token);
        jwt.verify(token, jwt_secret_key, async (error: any, data: any) => {
            if (error) {
                return res.send({
                    data: error,
                    received: false
                });
            }
            
            return res.send({
                posts: "List of Posts",
                data: data,

            });
            
        })
    }

    static async signup(req: Request, res: Response) {
        let { username, userEmail, password } = req.body;
        let jwt_secret_key = process.env.JWT_SECRET_KEY as string;

        let isEmailValidated = EmailValidator.validate(userEmail);
        if (!isEmailValidated) {
            return res.send({
                data: "Send valid email",
                authentication: false
            });
        }
        jwt.sign(
            {
                userEmail //!Payload
            },
            jwt_secret_key, //! Secret Key
            {
                expiresIn: "1h" //! Expiry Time
            },
            async (error: any, data: any) => { //!Callback
                if (error) {
                    return res.send({
                        data: error,
                        authentication: false
                    });
                }
                return res.send({
                    data: data,
                    authentication: true,
                    userEmail: userEmail,
                });
            }
        );
    }
}

export { AuthenticationController }