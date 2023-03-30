"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolPromise = void 0;
const mssql_1 = __importDefault(require("mssql"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:mssql-service');
// let dbConfig = {
//     "server": 'localhost',
//     // "server": 'host.docker.internal',
//     "user": 'sa',
//     "password": 'Smart@123',
//     "database": 'UNFYD-TALK-1.0',
//     "port": 1433,
//     "dialect": "mssql",
//     "dialectOptions": {
//         "instanceName": "SQLEXPRESS"
//     },
//     "options": {
//         "trustServerCertificate": true,
//       }
// };
var config = {
    user: 'sa',
    password: 'root',
    database: 'SIP',
    server: 'localhost',
    dialect: "mssql",
    dialectOptions: {
        "instanceName": "SQLEXPRESS"
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        //   enableArithAbort: true
    }
};
const poolPromise = new mssql_1.default.ConnectionPool(config)
    .connect()
    .then(pool => {
    console.log("Connected to MSSQL");
    return pool;
}).catch(err => console.log("Database Connection Failed : ", err));
exports.poolPromise = poolPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsLnNlcnZpY2UgY29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9zcWwuc2VydmljZSBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUF3QjtBQUN4QixrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QiwyQ0FBMkM7QUFDM0Msb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUMvQixvQ0FBb0M7QUFDcEMsb0JBQW9CO0FBQ3BCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsdUNBQXVDO0FBQ3ZDLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsMENBQTBDO0FBQzFDLFVBQVU7QUFDVixLQUFLO0FBRUwsSUFBSSxNQUFNLEdBQUc7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsTUFBTSxFQUFFLFdBQVc7SUFDbkIsT0FBTyxFQUFFLE9BQU87SUFDaEIsY0FBYyxFQUFFO1FBQ1osY0FBYyxFQUFFLFlBQVk7S0FDL0I7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsRUFBRTtRQUNQLEdBQUcsRUFBRSxDQUFDO1FBQ04saUJBQWlCLEVBQUUsS0FBSztLQUMzQjtJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxJQUFJO1FBQ2Isc0JBQXNCLEVBQUUsSUFBSSxFQUFFLG1EQUFtRDtRQUNuRiwyQkFBMkI7S0FDNUI7Q0FDRixDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQUcsSUFBSSxlQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztLQUM3QyxPQUFPLEVBQUU7S0FDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDakMsT0FBTyxJQUFJLENBQUE7QUFDZixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFJOUQsa0NBQVcifQ==