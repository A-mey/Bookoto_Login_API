import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import shortid from 'shortid';
import debug from 'debug';
// import { poolPromise } from '../../common/services/DAL/sql.service';
// import { sipSQL } from '../../common/services/DAL/sql.service.sip'

const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    users: Array<CreateUserDto> = [];

    constructor() {
        log('Created new instance of UsersDao');
    }

    async getUsers() {
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
    };
    
    async getUserById(userId: string) {
        return this.users.find((user: { id: string }) => user.id === userId);
    }

    async addUser(user: CreateUserDto) {
        user.id = shortid.generate();
        this.users.push(user);
        return user.id;
    }

    async putUserById(userId: string, user: PutUserDto) {
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId
        );
        this.users.splice(objIndex, 1, user);
        return `${user.id} updated via put`;
    }
    
    async patchUserById(userId: string, user: PatchUserDto) {
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId
        );
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
    }

    async removeUserById(userId: string) {
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId
        );
        this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }

    async getUserByEmail(email: string) {
        const objIndex = this.users.findIndex(
            (obj: { email: string }) => obj.email === email
        );
        let currentUser = this.users[objIndex];
        if (currentUser) {
            return currentUser;
        } else {
            return null;
        }
    }
}

export default new UsersDao();