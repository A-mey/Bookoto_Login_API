"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRoutes = void 0;
const common_routes_config_1 = require("../../common/common.routes.config");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
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
        // this.app.route('/registerUser')
        //     .post(
        //         validate({ body: LoginSchema.registerUserSchema }),
        //         LoginMiddleware.checkExistingUser,
        //         LoginController.createUser
        //     )
        return this.app;
    }
}
exports.LoginRoutes = LoginRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3JvdXRlcy9sb2dpbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSx1RkFBOEQ7QUFFOUQseUZBQThEO0FBQzlELGtHQUE4RDtBQUM5RCxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSw2Q0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBSXZDLE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDdkIsSUFBSSxDQUNELFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQ0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQy9DLDBCQUFlLENBQUMsT0FBTyxDQUMxQixDQUFDO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO2FBQ3pCLElBQUksQ0FDRCxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0NBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQ2pELDBCQUFlLENBQUMsV0FBVyxDQUM5QixDQUFDO1FBQ04sa0NBQWtDO1FBQ2xDLGFBQWE7UUFDYiw4REFBOEQ7UUFDOUQsNkNBQTZDO1FBQzdDLHFDQUFxQztRQUNyQyxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXhCRCxrQ0F3QkMifQ==