"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRoutes = void 0;
const common_routes_config_1 = require("../../common/common.routes.config");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const login_middleware_1 = __importDefault(require("../middleware/login.middleware"));
const express_json_validator_middleware_1 = require("express-json-validator-middleware");
const loginSchema_middleware_1 = __importDefault(require("../middleware/loginSchema.middleware"));
const { validate } = new express_json_validator_middleware_1.Validator({});
class LoginRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/createOTP`)
            .post(validate({ body: loginSchema_middleware_1.default.createOTPSchema }), login_controller_1.default.sendOTP);
        this.app.route('/validateOTP')
            .post(validate({ body: loginSchema_middleware_1.default.validateOTPSchema }), login_controller_1.default.validateOTP);
        this.app.route('/registerUser')
            .post(validate({ body: loginSchema_middleware_1.default.registerUserSchema }), login_middleware_1.default.checkExistingUser, login_controller_1.default.createUser);
        return this.app;
    }
}
exports.LoginRoutes = LoginRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3JvdXRlcy9sb2dpbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSx1RkFBOEQ7QUFDOUQsc0ZBQTZEO0FBQzdELHlGQUE4RDtBQUM5RCxrR0FBOEQ7QUFDOUQsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksNkNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUl2QyxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ3ZCLElBQUksQ0FDRCxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0NBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUMvQywwQkFBZSxDQUFDLE9BQU8sQ0FDMUIsQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUN6QixJQUFJLENBQ0QsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdDQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUNqRCwwQkFBZSxDQUFDLFdBQVcsQ0FDOUIsQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUMxQixJQUFJLENBQ0QsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdDQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUNsRCwwQkFBZSxDQUFDLGlCQUFpQixFQUNqQywwQkFBZSxDQUFDLFVBQVUsQ0FDN0IsQ0FBQTtRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUF4QkQsa0NBd0JDIn0=