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
    encryptData() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    storeUserData() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = new LoginService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBMkQ7QUFHM0QsTUFBTSxZQUFZO0lBQ1IsYUFBYSxDQUFDLE9BQWUsRUFBRSxJQUFZLEVBQUUsR0FBVzs7WUFDMUQsT0FBTyxzQkFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxLQUFhOztZQUN6QixPQUFPLHNCQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLFdBQVc7O1FBRWpCLENBQUM7S0FBQTtJQUVLLGFBQWE7O1FBRW5CLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9