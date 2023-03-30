import {ReasonPhrases, StatusCodes,	getReasonPhrase, getStatusCode} from 'http-status-codes';
import { NextFunction, ErrorRequestHandler, Request, Response } from 'express';
import { ValidationError } from "express-json-validator-middleware";

export function validationErrorMiddleware(error: any, request: Request, response: Response, next: NextFunction ) {
    console.log("error", error);
    console.log("ValidationError", error.validationErrors.body[0].message);
    let errorMSg: string = errorMessage(error.validationErrors.body)

	if (response.headersSent) {
		return next(error);
	}

	const isValidationError = error instanceof ValidationError;
    console.log("isValidationError", isValidationError)
	if (!isValidationError) {
		return next(error);
	}

	response.status(400).json({
		error: errorMSg,
	});

	next();
}

function errorMessage(error: Array<any>): string {
    console.log("errorMessage():error", error)
    console.log("errorMessage():errorBody", error[0].keyword)
    let err = ""
    try {
        switch(error[0].keyword) {
            case 'additionalProperties':
                err = `Unable to find property ${error[0].params.additionalProperty}`
                break;
            case 'required':
                err =  `Missing property ${error[0].params.missingProperty}`
                break;
            case 'type':
                err = `Invalid type for property ${error[0].instancePath}`
                break;
            case 'enum':
                err = `Invalid type for property ${error[0].instancePath}`
                break;
            default:
                err = "Unknown error"

        }
    }
    catch(e) {
        console.log(e);
        err = "Unknown error"
    }
    return err;
    
}