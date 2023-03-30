"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveReceiveSchema = void 0;
exports.saveReceiveSchema = {
    "type": "object",
    "properties": {
        "FLAG": {
            "type": "string",
            "enum": ["SELECT", "INSERT"]
        }
    },
    "if": {
        "properties": { "FLAG": { "const": "INSERT" } }
    },
    "then": {
        "additionalProperties": false,
        "required": ["FLAG", "uID", "KEY", "VALUE", "IdKEY"],
        "properties": {
            "FLAG": {
                "type": "string",
                "enum": ["INSERT"]
            },
            "uID": {
                "type": "string"
            },
            "KEY": {
                "type": "string"
            },
            "VALUE": {
                "type": "string"
            },
            "IdKEY": {
                "type": "string"
            },
            "messages": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "message": {
                            "type": "object",
                            "properties": {
                                "text": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "else": {
        "additionalProperties": false,
        "required": ["FLAG", "messages"],
        "properties": {
            "FLAG": {
                "type": "string",
                "enum": ["SELECT"]
            },
            "messages": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "text": {
                            "type": "string"
                        },
                        "from": {
                            "type": "number"
                        }
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnJlcXVlc3RCb2R5VmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29tbW9uL2NvbW1vbi5yZXF1ZXN0Qm9keVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFYSxRQUFBLGlCQUFpQixHQUFtQjtJQUNoRCxNQUFNLEVBQUUsUUFBUTtJQUNiLFlBQVksRUFBRztRQUNYLE1BQU0sRUFBRTtZQUNKLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7U0FDL0I7S0FDSjtJQUNKLElBQUksRUFBRTtRQUNMLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtLQUM3QztJQUNELE1BQU0sRUFBRTtRQUNULHNCQUFzQixFQUFFLEtBQUs7UUFDN0IsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUNwRCxZQUFZLEVBQUU7WUFDYixNQUFNLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUNsQjtZQUNELEtBQUssRUFBRTtnQkFDTixNQUFNLEVBQUUsUUFBUTthQUNoQjtZQUNELEtBQUssRUFBRTtnQkFDTixNQUFNLEVBQUUsUUFBUTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUixNQUFNLEVBQUUsUUFBUTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUixNQUFNLEVBQUUsUUFBUTthQUNoQjtZQUNELFVBQVUsRUFBRTtnQkFDWCxNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLFlBQVksRUFBRTt3QkFDYixTQUFTLEVBQUU7NEJBQ1YsTUFBTSxFQUFFLFFBQVE7NEJBQ2hCLFlBQVksRUFBRTtnQ0FDYixNQUFNLEVBQUU7b0NBQ1AsTUFBTSxFQUFFLFFBQVE7aUNBQ2hCOzZCQUNEO3lCQUNEO3FCQUNEO2lCQUNEO2FBQ0Q7U0FDRDtLQUNDO0lBQ0QsTUFBTSxFQUFFO1FBQ1Qsc0JBQXNCLEVBQUUsS0FBSztRQUM3QixVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO1FBQ2hDLFlBQVksRUFBRTtZQUNiLE1BQU0sRUFBRTtnQkFDUCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ2xCO1lBQ0QsVUFBVSxFQUFFO2dCQUNYLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE9BQU8sRUFBRTtvQkFDUixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsWUFBWSxFQUFFO3dCQUNiLE1BQU0sRUFBRTs0QkFDUCxNQUFNLEVBQUUsUUFBUTt5QkFDaEI7d0JBQ0QsTUFBTSxFQUFFOzRCQUNQLE1BQU0sRUFBRSxRQUFRO3lCQUNoQjtxQkFDRDtpQkFDRDthQUNEO1NBQ0Q7S0FDQztDQUNILENBQUMifQ==