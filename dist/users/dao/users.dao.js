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
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
// import { poolPromise } from '../../common/services/DAL/sql.service';
// import { sipSQL } from '../../common/services/DAL/sql.service.sip'
const log = (0, debug_1.default)('app:in-memory-dao');
class UsersDao {
    constructor() {
        this.users = [];
        log('Created new instance of UsersDao');
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            // return this.users;
            // let pool: any = await poolPromise;
            // const request = await pool.request();
            // let pool: any = await sipSQL.getConnection();
            // console.log(pool, "pool")
            // const request = await pool.request();
            // request.query('SELECT TOP 10 * FROM USERMASTER', async function (err: Error, recordset: any) {
            //     try {
            //         if (err) {
            //             return err.message;
            //         }
            //         let result: any = recordset.recordsets;
            //         console.log(result);
            //         return result;
            //     } 
            //     catch (err) {
            //         throw err;
            //     }
            // });
            // request.query('SELECT TOP 10 * FROM UserDetails').then((result: Promise<any>) => {
            //     console.log("result", result);
            //     return result;
            // }).catch((err: any) => {
            //     console.log(err);
            // })
            // return new Promise((resolve, reject) => {
            //     request.query('SELECT TOP 10 * FROM UserDetails', async function (err: Error, recordset: any) {
            //         try {
            //                 if (err) {
            //                     reject(err.message);
            //                 }
            //                 let result: any = recordset.recordsets;
            //                 console.log("user3", result);
            //                 resolve(result);
            //             } 
            //             catch (err: any) {
            //                 reject(err.message);
            //             }
            //     })
            // })
        });
    }
    ;
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((user) => user.id === userId);
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.id = shortid_1.default.generate();
            this.users.push(user);
            return user.id;
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1, user);
            return `${user.id} updated via put`;
        });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            let currentUser = this.users[objIndex];
            const allowedPatchFields = [
                'password',
                'firstName',
                'lastName',
                'permissionLevel',
            ];
            for (let field of allowedPatchFields) {
                if (field in user) {
                    // @ts-ignore
                    currentUser[field] = user[field];
                }
            }
            this.users.splice(objIndex, 1, currentUser);
            return `${user.id} patched`;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1);
            return `${userId} removed`;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.email === email);
            let currentUser = this.users[objIndex];
            if (currentUser) {
                return currentUser;
            }
            else {
                return null;
            }
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvL3VzZXJzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLHNEQUE4QjtBQUM5QixrREFBMEI7QUFDMUIsdUVBQXVFO0FBQ3ZFLHFFQUFxRTtBQUVyRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFFBQVE7SUFHVjtRQUZBLFVBQUssR0FBeUIsRUFBRSxDQUFDO1FBRzdCLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFSyxRQUFROztZQUNWLHFCQUFxQjtZQUNyQixxQ0FBcUM7WUFDckMsd0NBQXdDO1lBQ3hDLGdEQUFnRDtZQUNoRCw0QkFBNEI7WUFDNUIsd0NBQXdDO1lBQ3hDLGlHQUFpRztZQUNqRyxZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLGtDQUFrQztZQUNsQyxZQUFZO1lBQ1osa0RBQWtEO1lBQ2xELCtCQUErQjtZQUMvQix5QkFBeUI7WUFDekIsU0FBUztZQUNULG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIsUUFBUTtZQUNSLE1BQU07WUFDTixxRkFBcUY7WUFDckYscUNBQXFDO1lBQ3JDLHFCQUFxQjtZQUNyQiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLEtBQUs7WUFDTCw0Q0FBNEM7WUFDNUMsc0dBQXNHO1lBQ3RHLGdCQUFnQjtZQUNoQiw2QkFBNkI7WUFDN0IsMkNBQTJDO1lBQzNDLG9CQUFvQjtZQUNwQiwwREFBMEQ7WUFDMUQsZ0RBQWdEO1lBQ2hELG1DQUFtQztZQUNuQyxpQkFBaUI7WUFDakIsaUNBQWlDO1lBQ2pDLHVDQUF1QztZQUN2QyxnQkFBZ0I7WUFDaEIsU0FBUztZQUNULEtBQUs7UUFDVCxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUksV0FBVyxDQUFDLE1BQWM7O1lBQzVCLE9BQU8sSUFBSSxD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