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
// we import our newly created user services
const login_service_1 = __importDefault(require("../services/login.service"));
// we use debug with a custom context as described in Part 1
const debug_1 = __importDefault(require("debug"));
const otp_services_1 = __importDefault(require("../../common/services/otp.services"));
const log = (0, debug_1.default)('app:users-controller');
class UsersController {
    sendOTP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailId = req.body.EMAILID;
            const otpObject = yield otp_services_1.default.createOTP(emailId);
            console.log("otpObject", otpObject.fullHash);
            yield otp_services_1.default.sendOtpMail(emailId, otpObject.otp);
            res.status(200).send({ fullHash: otpObject.fullHash });
        });
    }
    validateOTP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = yield login_service_1.default.otpValidation(req.body.EMAILID, req.body.HASH, req.body.OTP);
            res.status(200).send(validation);
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL2NvbnRyb2xsZXJzL2xvZ2luLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSw0Q0FBNEM7QUFDNUMsOEVBQXFEO0FBS3JELDREQUE0RDtBQUM1RCxrREFBMEI7QUFJMUIsc0ZBQTREO0FBSTVELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELE1BQU0sZUFBZTtJQUVYLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMvQixNQUFNLFNBQVMsR0FBYyxNQUFNLHNCQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM1QyxNQUFNLHNCQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sVUFBVSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7Q0FXSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==