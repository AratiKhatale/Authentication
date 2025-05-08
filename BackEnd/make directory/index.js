const fs = require('fs');


//parent directory creation
// fs.mkdir('myDIrectory',(err) =>{
//     if (err) throw err;
//     console.log("successfully created directory");
// })



//child directoy creation

// fs.mkdir('parent/child',{recursive:true}, (err) =>{
//     if(err) throw err;
//     console.log("successfully created child directory");
// });


// for removing parent child directory
// fs.rmdir('parent/child', (err) =>{
//     if (err) throw err;
//     console.log("successfully removed child directory");
// })

// fs.rmdir('../remove this folder',(err) =>{
//     if(err) throw err;
//     console.log("remove directory successfully")
// })

// for reading file

// fs.writeFile('writeFile1.text',"file created by the node write file method", (err) =>{
//     if(err) throw err;
//     console.log("file written successfully");
// });

// fs.readFile('writeFile1.txt','utf-8', (err,data) =>{
//     if(err) throw err;
//     console.log(data);
// })  

//rename file
// fs.rename('readFile.txt','writeFile2.txt', (err) =>{
//     if(err) throw err;
//     console.log("file renamed successfully")
// });



//remove file
fs.rm('writeFile2.txt', (err) =>{
    if(err) throw err;
    console.log("file removed successfully")
});