const mariadb = require('mariadb'); 
const vals = require('./consts.js'); // consts.js 파일을 불러옴 
const pool = mariadb.createPool({ 
    host: vals.DBHost, 
    port:vals.DBPort, 
    user: vals.DBUser, 
    password: vals.DBPass, 
    connectionLimit: 5 });  

async function SignupUser(userid,user_pw,user_name){ 
        let conn, rows; 
        try{ 
            conn = await pool.getConnection(); 
            conn.query('USE nodejs_test'); 
            rows = await conn.query(`insert into users values ('${userid}','${user_pw}','${user_name}');`);
            console.log("uesrid", userid, "userpw", user_pw, "username", user_name); 
        } catch(err){ 
            throw err; 
        } finally{ 
            if (conn) 
                conn.end(); 
                return rows; 
            } 
        }  
        module.exports = {signupuser:SignupUser} 
        //다른 파일에서 SignupUser 를  signupuser 불러서 쓸수 있음 
    