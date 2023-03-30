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
const otp_generator_1 = __importDefault(require("otp-generator"));
// const crypto       = require("crypto");
const crypto_1 = __importDefault(require("crypto"));
const mailer_services_1 = __importDefault(require("./mailer.services"));
const key = 'MySecretKey';
class OtpService {
    createOTP(emailId) {
        let otpValidationTime = process.env.otpValidationTime || '2';
        let otpValidationTimeInMins = parseInt(otpValidationTime, 10);
        const otp = otp_generator_1.default.generate(6, { upperCaseAlphabets: false, specialChars: false });
        const ttl = otpValidationTimeInMins * 60 * 1000; //5 Minutes in miliseconds
        const expires = Date.now() + ttl; //timestamp to 5 minutes in the future
        const data = `${emailId}.${otp}.${expires}`; // phone.otp.expiry_timestamp
        const hash = crypto_1.default.createHmac("sha256", key).update(data).digest("hex"); // creating SHA256 hash of the data
        const fullHash = `${hash}.${expires}`; // Hash.expires, format to send to the user
        let otpObj = {
            otp: otp,
            fullHash: fullHash
        };
        return otpObj;
    }
    verifyOTP(emailId, hash, otp) {
        // Seperate Hash value and expires from the hash returned from the user
        let [hashValue, expires] = hash.split(".");
        // Check if expiry time has passed
        let now = Date.now();
        if (now > parseInt(expires))
            return false;
        // Calculate new hash with the same key and the same algorithm
        let data = `${emailId}.${otp}.${expires}`;
        let newCalculatedHash = crypto_1.default.createHmac("sha256", key).update(data).digest("hex");
        // Match the hashes
        if (newCalculatedHash === hashValue) {
            return true;
        }
        return false;
    }
    sendOtpMail(emailId, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailRecipient = emailId;
            let subject = 'OTP';
            let body = "Your OTP is ${otp}";
            body = body.replace("${otp}", otp);
            yield mailer_services_1.default.sendMail(emailRecipient, subject, body);
        });
    }
}
exports.default = new OtpService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL290cC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUF5QztBQUN6QywwQ0FBMEM7QUFDMUMsb0RBQTRCO0FBRTVCLHdFQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBVyxhQUFhLENBQUM7QUFFbEMsTUFBTSxVQUFVO0lBQ1osU0FBUyxDQUFDLE9BQWU7UUFDckIsSUFBSSxpQkFBaUIsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsQ0FBQTtRQUNwRSxJQUFJLHVCQUF1QixHQUFXLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0RSxNQUFNLEdBQUcsR0FBRyx1QkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDekYsTUFBTSxHQUFHLEdBQUcsdUJBQXVCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtRQUMzRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsc0NBQXNDO1FBQ3hFLE1BQU0sSUFBSSxHQUFHLEdBQUcsT0FBTyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtRQUMxRSxNQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztRQUM1RyxNQUFNLFFBQVEsR0FBVSxHQUFHLElBQUksSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLDJDQUEyQztRQUN6RixJQUFJLE1BQU0sR0FBYztZQUNwQixHQUFHLEVBQUUsR0FBRztZQUNSLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUE7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQWUsRUFBRSxJQUFZLEVBQUUsR0FBVztRQUNoRCx1RUFBdUU7UUFDdkUsSUFBSSxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLGtDQUFrQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBRyxHQUFHLEdBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3ZDLDhEQUE4RDtRQUM5RCxJQUFJLElBQUksR0FBSSxHQUFHLE9BQU8sSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDM0MsSUFBSSxpQkFBaUIsR0FBRyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRixtQkFBbUI7UUFDbkIsSUFBRyxpQkFBaUIsS0FBSyxTQUFTLEVBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFSyxXQUFXLENBQUMsT0FBZSxFQUFFLEdBQVc7O1lBQzFDLElBQUksY0FBYyxHQUFXLE9BQU8sQ0FBQztZQUNyQyxJQUFJLE9BQU8sR0FBWSxLQUFLLENBQUM7WUFDN0IsSUFBSSxJQUFJLEdBQVcsb0JBQW9CLENBQUM7WUFDeEMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE1BQU0seUJBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUEifQ==