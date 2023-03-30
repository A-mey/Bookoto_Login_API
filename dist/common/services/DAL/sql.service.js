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
exports.SQLService = void 0;
const mssql_1 = __importDefault(require("mssql"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:mssql-service');
class SQLService {
    constructor(database) {
        //private sql connection variable 
        //constructor()
        //you will check already exist object 
        //if exist return it else create new and return
        this.config = {
            user: 'sa',
            password: 'root',
            database: '',
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
        this.config.database = database;
        console.log("config", this.config);
        this.connect(this.config);
        // this.pool = this.pool;
    }
    connect(config) {
        // connect() {
        console.log(config, "config");
        new mssql_1.default.ConnectionPool(config)
            .connect()
            .then(pool => {
            console.log("Connected to MSSQL");
            SQLService.pool = pool;
            console.log(SQLService.pool, "SQLService.pool");
        }).catch(err => console.log("Database Connection Failed : ", err));
    }
    static getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("SQLService.pool2", SQLService.pool);
            // return SQLService.pool;
            return new Promise((resolve, reject) => { resolve(SQLService.pool); });
        });
    }
}
exports.SQLService = SQLService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21tb24vc2VydmljZXMvREFML3NxbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE0QztBQUM1QyxrREFBMEI7QUFJMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBYSxVQUFVO0lBZ0NuQixZQUFZLFFBQWdCO1FBN0I3QixrQ0FBa0M7UUFDbEMsZUFBZTtRQUNmLHNDQUFzQztRQUN0QywrQ0FBK0M7UUFJOUMsV0FBTSxHQUFXO1lBQ2pCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsV0FBVztZQUNuQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUU7Z0JBQ1osY0FBYyxFQUFFLFlBQVk7YUFDL0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLENBQUM7Z0JBQ04saUJBQWlCLEVBQUUsS0FBSzthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixzQkFBc0IsRUFBRSxJQUFJLEVBQUUsbURBQW1EO2dCQUNuRiwyQkFBMkI7YUFDNUI7U0FDRixDQUFDO1FBSUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQix5QkFBeUI7SUFFN0IsQ0FBQztJQUVPLE9BQU8sQ0FBQyxNQUFjO1FBQzlCLGNBQWM7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLGVBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO2FBQzdCLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUNqQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELE1BQU0sQ0FBTyxhQUFhOztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCwwQkFBMEI7WUFDMUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtRQUN2RSxDQUFDO0tBQUE7Q0FDSjtBQXpERCxnQ0F5REMifQ==