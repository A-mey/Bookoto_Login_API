"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const otp_services_1 = __importDefault(require("../../common/services/otp.services"));
const encryption_services_1 = __importDefault(require("../../common/services/encryption.services"));
class LoginService {
    otpValidation(emailId, hash, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            return otp_services_1.default.verifyOTP(emailId, hash, otp);
        });
    }
    createOTP(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return otp_services_1.default.createOTP(email);
        });
    }
    encryptData(emailId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let secretKey = process.env.secretKey;
            let customSalt = yield encryption_services_1.default.createSalt();
            let key = yield encryption_services_1.default.scrypt(customSalt, secretKey);
            let encryptedData = yield encryption_services_1.default.aesEencryption(key, password);
            let pill = customSalt + encryptedData;
            let passwordSalt = (yield encryption_services_1.default.sha256Encryption(emailId + secretKey)).slice(-22);
            let passwordHash = (yield encryption_services_1.default.scrypt(passwordSalt, secretKey)).slice(-40);
            let usernameHash = yield encryption_services_1.default.sha256Encryption(emailId);
            // let data: Pill = {usernameHash: usernameHash, passwordHash: passwordHash, pill: pill};
            let userAuth = yield encryption_services_1.default.hmac(key, usernameHash + passwordHash);
            let authPill = userAuth + pill;
            let data = {
                authPill: authPill,
                usernameHash: usernameHash
            };
            return data;
        });
    }
}
exports.default = new LoginService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBMkQ7QUFFM0Qsb0dBQXlFO0FBS3pFLE1BQU0sWUFBWTtJQUNSLGFBQWEsQ0FBQyxPQUFlLEVBQUUsSUFBWSxFQUFFLEdBQVc7O1lBQzFELE9BQU8sc0JBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsS0FBYTs7WUFDekIsT0FBTyxzQkFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsT0FBZSxFQUFFLFFBQWdCOztZQUMvQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVUsQ0FBQTtZQUN0QyxJQUFJLFVBQVUsR0FBRyxNQUFNLDZCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3RELElBQUksR0FBRyxHQUFHLE1BQU0sNkJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNoRSxJQUFJLGFBQWEsR0FBRyxNQUFNLDZCQUFpQixDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDMUUsSUFBSSxJQUFJLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBQTtZQUNyQyxJQUFJLFlBQVksR0FBRyxDQUFDLE1BQU0sNkJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUYsSUFBSSxZQUFZLEdBQUcsQ0FBQyxNQUFNLDZCQUFpQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RixJQUFJLFlBQVksR0FBRyxNQUFNLDZCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JFLHlGQUF5RjtZQUN6RixJQUFJLFFBQVEsR0FBRyxNQUFNLDZCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxHQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVFLElBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxJQUFJLEdBQUc7Z0JBQ1AsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFlBQVksRUFBRSxZQUFZO2FBQzdCLENBQUE7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FTSjtBQUVELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==