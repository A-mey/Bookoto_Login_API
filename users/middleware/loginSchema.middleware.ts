import {  AllowedSchema } from "express-json-validator-middleware";

class LoginSchema{
    createOTPSchema: AllowedSchema  = {
        "type": "object",
        "additionalProperties": false,
        "required": ["EMAILID"],
        "properties" : {
            "EMAILID": {
                "type": "string",
            }
        },
    };

    validateOTPSchema: AllowedSchema = {
        "type": "object",
        "additionalProperties": false,
        "required": ["EMAILID", "HASH", "OTP"],
        "properties" : {
            "EMAILID": {
                "type": "string",
            },
            "HASH": {
                "type": "string",
            },
            "OTP": {
                "type": "string",
            },
        },
    }

    registerUserSchema: AllowedSchema = {
        "type": "object",
        "additionalProperties": false,
        "required": ["EMAILID", "PASSWORD"],
        "properties" : {
            "EMAILID": {
                "type": "string",
            },
            "PASSWORD": {
                "type": "string",
            }
        },
    }
}

export default new LoginSchema()