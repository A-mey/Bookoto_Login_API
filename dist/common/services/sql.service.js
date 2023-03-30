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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vc2VydmljZXMvc3FsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXdCO0FBQ3hCLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLDJDQUEyQztBQUMzQyxvQkFBb0I7QUFDcEIsK0JBQStCO0FBQy9CLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQix1Q0FBdUM7QUFDdkMsU0FBUztBQUNULG1CQUFtQjtBQUNuQiwwQ0FBMEM7QUFDMUMsVUFBVTtBQUNWLEtBQUs7QUFFTCxJQUFJLE1BQU0sR0FBRztJQUNULElBQUksRUFBRSxJQUFJO0lBQ1YsUUFBUSxFQUFFLE1BQU07SUFDaEIsUUFBUSxFQUFFLEtBQUs7SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixPQUFPLEVBQUUsT0FBTztJQUNoQixjQUFjLEVBQUU7UUFDWixjQUFjLEVBQUUsWUFBWTtLQUMvQjtJQUNELElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxFQUFFO1FBQ1AsR0FBRyxFQUFFLENBQUM7UUFDTixpQkFBaUIsRUFBRSxLQUFLO0tBQzNCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxFQUFFLElBQUk7UUFDYixzQkFBc0IsRUFBRSxJQUFJLEVBQUUsbURBQW1EO1FBQ25GLDJCQUEyQjtLQUM1QjtDQUNGLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxJQUFJLGVBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0tBQzdDLE9BQU8sRUFBRTtLQUNULElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNqQyxPQUFPLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUk5RCxrQ0FBVyJ9