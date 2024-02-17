// // 오라클 사용
// // npm install oracledb --save

// const oracledb = require("oracledb")
// const dbConfig = require("./dbConfig.js")

// oracledb.autoCommit = true; // 자동 커밋

// oracledb.getConnection({
//     user:dbConfig.user,
//     password:dbConfig.password,
//     connectString:dbConfig.connectString
//     },
//     function(err,conn) {
//         if(err) {throw err;}

//         console.log("oracle db 연결 성공");

//         var sql;

//         sql = "insert into cuser values (:id, :pw, :name, :age)";

//         sql = "select id,password,name,age from cuser";

//         conn.execute(sql,[],function(err,result) {
//             if(err) {throw err;}

//             console.log(result.rows);

//             doRelease(conn);
//         });
//     }
// )

// function doRelease(conn) {

//     conn.release(function(err){
//         if(err) {throw err;}
//     });
// }