"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginSchema {
    constructor() {
        this.createOTPSchema = {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID"],
            "properties": {
                "EMAILID": {
                    "type": "string",
                }
            },
        };
        this.validateOTPSchema = {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID", "HASH", "OTP"],
            "properties": {
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
        };
        this.registerUserSchema = {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID", "PASSWORD"],
            "properties": {
                "EMAILID": {
                    "type": "string",
                },
                "PASSWORD": {
                    "type": "string",
                }
            },
        };
    }
}
exports.default = new LoginSchema();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5TY2hlbWEubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL21pZGRsZXdhcmUvbG9naW5TY2hlbWEubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sV0FBVztJQUFqQjtRQUNJLG9CQUFlLEdBQW1CO1lBQzlCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLHNCQUFzQixFQUFFLEtBQUs7WUFDN0IsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLFlBQVksRUFBRztnQkFDWCxTQUFTLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0o7U0FDSixDQUFDO1FBRUYsc0JBQWlCLEdBQWtCO1lBQy9CLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLHNCQUFzQixFQUFFLEtBQUs7WUFDN0IsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7WUFDdEMsWUFBWSxFQUFHO2dCQUNYLFNBQVMsRUFBRTtvQkFDUCxNQUFNLEVBQUUsUUFBUTtpQkFDbkI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLE1BQU0sRUFBRSxRQUFRO2lCQUNuQjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0o7U0FDSixDQUFBO1FBRUQsdUJBQWtCLEdBQWtCO1lBQ2hDLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLHNCQUFzQixFQUFFLEtBQUs7WUFDN0IsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztZQUNuQyxZQUFZLEVBQUc7Z0JBQ1gsU0FBUyxFQUFFO29CQUNQLE1BQU0sRUFBRSxRQUFRO2lCQUNuQjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0o7U0FDSixDQUFBO0lBQ0wsQ0FBQztDQUFBO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQSJ9