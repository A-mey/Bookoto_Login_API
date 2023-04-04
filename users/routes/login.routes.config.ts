import { CommonRoutesConfig } from "../../common/common.routes.config";
import LoginController from '../controllers/login.controller';
import LoginMiddleware from '../middleware/login.middleware';
import { Validator } from "express-json-validator-middleware";
import LoginSchema from '../middleware/loginSchema.middleware'
const { validate } = new Validator({});
import express from 'express';


export class LoginRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {

        this.app.route(`/createOTP`)
            .post(
                validate({ body: LoginSchema.createOTPSchema }),
                LoginController.sendOTP
            );
        this.app.route('/validateOTP')
            .post(
                validate({ body: LoginSchema.validateOTPSchema }),
                LoginController.validateOTP
            );
        // this.app.route('/registerUser')
        //     .post(
        //         validate({ body: LoginSchema.registerUserSchema }),
        //         LoginMiddleware.checkExistingUser,
        //         LoginController.createUser
        //     )
        return this.app;
    }
}