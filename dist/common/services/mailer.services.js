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
const nodemailer_1 = __importDefault(require("nodemailer"));
class Nodemailer {
    ;
    constructor() { }
    static sendMail(to, subject, html) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.transporter.sendMail({
                from: 'a.may3pp@gmail.com',
                to,
                subject,
                html
            });
        });
    }
}
Nodemailer.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',
    auth: {
        user: 'a.may3pp@gmail.com',
        // pass: 'M1crobl0g',
        pass: 'pfyokviswhhbofap'
    }
});
exports.default = Nodemailer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbGVyLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haWxlci5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFvQztBQUVwQyxNQUFNLFVBQVU7SUFZYixDQUFDO0lBRUYsZ0JBQWUsQ0FBQztJQUVoQixNQUFNLENBQU8sUUFBUSxDQUFDLEVBQVUsRUFBRSxPQUFlLEVBQUUsSUFBWTs7WUFDN0QsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFDOUIsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsRUFBRTtnQkFDRixPQUFPO2dCQUNQLElBQUk7YUFDTCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7O0FBdEJjLHNCQUFXLEdBQTJCLG9CQUFVLENBQUMsZUFBZSxDQUFDO0lBQzlFLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxPQUFPO0lBRWhCLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxvQkFBb0I7UUFDMUIscUJBQXFCO1FBQ3JCLElBQUksRUFBRSxrQkFBa0I7S0FDM0I7Q0FDSixDQUFDLENBQUM7QUFjSCxrQkFBZSxVQUFVLENBQUMifQ==