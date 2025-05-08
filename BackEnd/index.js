// import express from 'express';
// import { DatabaseConnectivity } from './Database/DatabaseConnectivity.js';
// import dotenv from 'dotenv';
// import routes from './routes/AuthRoutes.js';
// // import cookieParser from 'cookie-parser';
// dotenv.config();

// const app = express();
// //middleware 
// app.use(express.json());  //for application parse

// // app.use(cookieParser());
// //auth routes
// app.get('/', (req, resp) =>{
//    resp.send("welcome in Authentication World")
// });

// app.use('/api/auth', routes); 

//  //entry point
// app.listen(3000,() =>{
//     console.log("app running on port 3000")
// });

// // called databse connetivty component here..
// DatabaseConnectivity();


// const reverseString = require('./practice/Export.js');

// console.log(reverseString('hello word'));


// const {add, remove} = require('./practice/Naming');
// const os = require('os');
// const fs = require('fs');
// console.log("add data is",add(1,2));
// console.log("remove data is",remove(5,2));

// const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);

// const data = require('path');
// console.log("path ", __dirname);
// console.log("filename",__filename);
// console.log('os hostname', os.hostname());
// console.log('os home directory', os.homedir());
// console.log('os uptime', os.uptime() , 'seconds');
// console.log('os total memory used', toMB(os.totalmem()),'MB');
// console.log('os free memory ', toMB(os.freemem()),'MB');
// // console.log('os home directory', os.networkInterfaces());


// const fileName = 'text.txt';
// const writefile = os.writefile(fileName,'')




const fs = require('fs');

// const content = `
// import React from 'react';

// const MyGeneratedComponent = () => {
//   return <div>Hello from generated file!</div>;
// };

// export default MyGeneratedComponent;
// `;


// async function writeJsFile() {
//         try{
//             await fs.writeFile('./practice/ReactComponent.js',content);
//             console.log("js file created successfully")
//         }catch(e){
//             console.log("thre having some error",e);
//         }
// }


// console.log("file write function is", writeJsFile());   

const fileName = './practice/Text.txt';

// fs.writeFile(fileName,'utf-8', (err, data)=> {
//     if(err){
//         console.error(err);
//     }else{
//         console.log(data)
//     }
// })

fs.readFile(fileName,'utf-8', (err, data)=> {
    if(err){
        console.error(err);
    }else{
        console.log(data)
    }
})