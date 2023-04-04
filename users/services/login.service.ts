import OtpService from '../../common/services/otp.services'
import {OtpObject} from '../../common/interfaces/otpObject.interface'
import EncryptionService from '../../common/services/encryption.services'
import HttpRequestService from '../../common/services/httpRequest.services'
import {Pill} from '../dto/pill.dto'


class LoginService {
    async otpValidation(emailId: string, hash: string, otp: string) {
        return OtpService.verifyOTP(emailId, hash, otp);
    }

    async createOTP(email: string): Promise<OtpObject> {
        return OtpService.createOTP(email);
    }

    async encryptData(emailId: string, password: string): Promise<Pill> {
        let secretKey = process.env.secretKey!
        let customSalt = await EncryptionService.createSalt();
        let key = await EncryptionService.scrypt(customSalt, secretKey);
        let encryptedData = await EncryptionService.aesEencryption(key, password);
        let pill = customSalt + encryptedData
        let passwordSalt = (await EncryptionService.sha256Encryption(emailId + secretKey)).slice(-22);
        let passwordHash = (await EncryptionService.scrypt(passwordSalt, secretKey)).slice(-40);
        let usernameHash = await EncryptionService.sha256Encryption(emailId);
        // let data: Pill = {usernameHash: usernameHash, passwordHash: passwordHash, pill: pill};
        let userAuth = await EncryptionService.hmac(key, usernameHash+passwordHash);
        let authPill = userAuth + pill;
        let data = {
            authPill: authPill,
            usernameHash: usernameHash
        }
        return data;
    }

    // async storeUserData(emailId: string, encryptedData: Pill) {
    //     let data = {
    //         EMAILID: emailId,
    //         ENCRYPTEDDATA: encryptedData
    //     }
    //     // let response = HttpRequestService.postRequest(data);
    // }
}

export default new LoginService();