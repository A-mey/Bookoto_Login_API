// we import express to add types to the request/response objects from our controller functions
import express from 'express';

// we import our newly created user services
import loginService from '../services/login.service';

// we import the argon2 library for password hashing
import argon2 from 'argon2';

// we use debug with a custom context as described in Part 1
import debug from 'debug';

import {OtpObject} from '../../common/interfaces/otpObject.interface'

import otpService from '../../common/services/otp.services';

import {Pill} from '../dto/pill.dto'

const log: debug.IDebugger = debug('app:users-controller');
class UsersController {

    async sendOTP(req: express.Request, res: express.Response) {
        let emailId = req.body.EMAILID;
        const otpObject: OtpObject = await otpService.createOTP(emailId);
        await otpService.sendOtpMail(emailId, otpObject.otp);
        res.status(200).send({fullHash: otpObject.fullHash});
    }

    async validateOTP(req: express.Request, res: express.Response) {
        const validation = await loginService.otpValidation(req.body.EMAILID, req.body.HASH, req.body.OTP)
        res.status(200).send(validation);
    }

    async createUser(req: express.Request, res: express.Response) {
        let emailId = req.body.EMAILID;
        let password = req.body.password;
        let encryptedPill: Pill = await loginService.encryptData(emailId, password);
        let data = await loginService.storeUserData(emailId, encryptedPill);
        res.status(200).send(data);
    }


}

export default new UsersController();