"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorMiddleware = void 0;
const express_json_validator_middleware_1 = require("express-json-validator-middleware");
function validationErrorMiddleware(error, request, response, next) {
    console.log("error", error);
    console.log("ValidationError", error.validationErrors.body[0].message);
    let errorMSg = errorMessage(error.validationErrors.body);
    if (response.headersSent) {
        return next(error);
    }
    const isValidationError = error instanceof express_json_validator_middleware_1.ValidationError;
    console.log("isValidationError", isValidationError);
    if (!isValidationError) {
        return next(error);
    }
    response.status(400).json({
        error: errorMSg,
    });
    next();
}
exports.validationErrorMiddleware = validationErrorMiddleware;
function errorMessage(error) {
    console.log("errorMessage():error", error);
    console.log("errorMessage():errorBody", error[0].keyword);
    let err = "";
    try {
        switch (error[0].keyword) {
            case 'additionalProperties':
                err = `Unable to find property ${error[0].params.additionalProperty}`;
                break;
            case 'required':
                err = `Missing property ${error[0].params.missingProperty}`;
                break;
            case 'type':
                err = `Invalid type for property ${error[0].instancePath}`;
                break;
            case 'enum':
                err = `Invalid type for property ${error[0].instancePath}`;
                break;
            default:
                err = "Unknown error";
        }
    }
    catch (e) {
        console.log(e);
        err = "Unknown error";
    }
    return err;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbkVycm9yTWlkZGxld2FyZS5lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9lcnJvci92YWxpZGF0aW9uRXJyb3JNaWRkbGV3YXJlLmVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHlGQUFvRTtBQUVwRSxTQUFnQix5QkFBeUIsQ0FBQyxLQUFVLEVBQUUsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLElBQWtCO0lBQzFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RSxJQUFJLFFBQVEsR0FBVyxZQUFZLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBRW5FLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtJQUVELE1BQU0saUJBQWlCLEdBQUcsS0FBSyxZQUFZLG1EQUFlLENBQUM7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3RELElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtJQUVELFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pCLEtBQUssRUFBRSxRQUFRO0tBQ2YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxFQUFFLENBQUM7QUFDUixDQUFDO0FBcEJELDhEQW9CQztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQWlCO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDekQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO0lBQ1osSUFBSTtRQUNBLFFBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNyQixLQUFLLHNCQUFzQjtnQkFDdkIsR0FBRyxHQUFHLDJCQUEyQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUE7Z0JBQ3JFLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsR0FBRyxHQUFJLG9CQUFvQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFBO2dCQUM1RCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLEdBQUcsR0FBRyw2QkFBNkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO2dCQUMxRCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLEdBQUcsR0FBRyw2QkFBNkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO2dCQUMxRCxNQUFNO1lBQ1Y7Z0JBQ0ksR0FBRyxHQUFHLGVBQWUsQ0FBQTtTQUU1QjtLQUNKO0lBQ0QsT0FBTSxDQUFDLEVBQUU7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsR0FBRyxHQUFHLGVBQWUsQ0FBQTtLQUN4QjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBRWYsQ0FBQyJ9