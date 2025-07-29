import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
    path: path.resolve('./.env')
});

const {
DB_host,
DB_database,
Db_username,
DB_password,
DB_port 
} = process.env;

export default {
   DB_host,
DB_database,
Db_username,
DB_password,
DB_port 
};