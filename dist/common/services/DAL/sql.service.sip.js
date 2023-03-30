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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sipSQL = void 0;
const sql_service_1 = require("./sql.service");
class sipSQL extends sql_service_1.SQLService {
    constructor() {
        super('SIP');
    }
    static getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            sql_service_1.SQLService.getConnection();
        });
    }
}
exports.sipSQL = sipSQL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsLnNlcnZpY2Uuc2lwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL0RBTC9zcWwuc2VydmljZS5zaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTJDO0FBRTNDLE1BQWEsTUFBTyxTQUFRLHdCQUFVO0lBRWxDO1FBQ0ksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQU8sYUFBYTs7WUFDdEIsd0JBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7Q0FDSjtBQVRELHdCQVNDIn0=