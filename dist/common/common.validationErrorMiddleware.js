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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnZhbGlkYXRpb25FcnJvck1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tb24vY29tbW9uLnZhbGlkYXRpb25FcnJvck1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUZBQW9FO0FBRXBFLFNBQWdCLHlCQUF5QixDQUFDLEtBQVUsRUFBRSxPQUFnQixFQUFFLFFBQWtCLEVBQUUsSUFBa0I7SUFDMUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLElBQUksUUFBUSxHQUFXLFlBQVksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFbkUsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25CO0lBRUQsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLFlBQVksbURBQWUsQ0FBQztJQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUE7SUFDdEQsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25CO0lBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekIsS0FBSyxFQUFFLFFBQVE7S0FDZixDQUFDLENBQUM7SUFFSCxJQUFJLEVBQUUsQ0FBQztBQUNSLENBQUM7QUFwQkQsOERBb0JDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBaUI7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN6RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7SUFDWixJQUFJO1FBQ0EsUUFBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3JCLEtBQUssc0JBQXNCO2dCQUN2QixHQUFHLEdBQUcsMkJBQTJCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtnQkFDckUsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxHQUFHLEdBQUksb0JBQW9CLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUE7Z0JBQzVELE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsR0FBRyxHQUFHLDZCQUE2QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUE7Z0JBQzFELE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsR0FBRyxHQUFHLDZCQUE2QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUE7Z0JBQzFELE1BQU07WUFDVjtnQkFDSSxHQUFHLEdBQUcsZUFBZSxDQUFBO1NBRTVCO0tBQ0o7SUFDRCxPQUFNLENBQUMsRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixHQUFHLEdBQUcsZUFBZSxDQUFBO0tBQ3hCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDIn0=