// /*#1 Running our First Node.JS Script */

// // console.log(`Hellooo Welcomeee To Nodejs`);

// /* Node.JS #4:  Complete REPL in NodeJS | READ, Eval, Print & Loop in NodeJS 

// REPL stands for Read Eval Print Loop and it represents a computer 
// environment like a Windows console or Unix/Linux shell where a 
// command is entered and the system responds with an 
// output in an interactive mode. Node.js or Node comes bundled 
// with a REPL environment. It performs the following tasks −
// Read − Reads user's input, parses the input into JavaScript data-structure, 
// and stores in memory.

// Eval − Takes and evaluates the data structure.

// Print − Prints the result.

// Loop − Loops the above command until the user presses ctrl-c twice.

// The REPL feature of Node is very useful in experimenting
//  with Node.js codes and to debug JavaScript codes. */

//  /* #5: Mastering the Node.js Core Modules | File System Node.js Module */


//  const namee = "Talha Zubair";

//  console.log(`My Name is ${namee}`);

 /* #5: Mastering the Node.js Core Modules | File System Node.js Module */

const fs = require("fs");
 
/* We Are Practicing Synchronous Version */

// Creating A New File 
// fs.writeFileSync("Fs.txt", "This File IS created By File System ( writeFileSync )");

// Replace Data  in Existing File
// fs.writeFileSync("Fs.txt", "This File IS created By File System ( This Is Updated Data )");

// // Add Extra Data In Existing File
// fs.appendFileSync("Fs.txt", "I Am Added By Using  appendFileSync ( TTalha Zubair Pk )");

// Read Data From File 


// const buf_data = fs.readFileSync("Fs.txt");
// console.log(buf_data);
// ^^^^^^^^^^^^^^^^^^^^^^^ From This Code We get buffer data
/*  
 <Buffer 54 68 69 73 20 46 69 6c 65 20 49 53 20 63 72 65 61 74 65 64 20 42 79 20 46 69 6c 65 20 53 79 73 74 65 6d 20 28 20 54 68 69 73 20 49 73 20 55 70 64 61 
... 66 more bytes>

*/
/*
    Node.js include an additional data type is called Buffer
    (not available in browsers javascript)
    buffer mainly used to store binary data
    while reading from file or recieving data packets over the network.
*/

// Coverting  Buffer Data in String

// const buf_data = fs.readFileSync("Fs.txt");
// Orignal_data = buf_data.toString();
// console.log(Orignal_data);

// Rename Existing File 

// fs.renameSync("Fs.txt", "RN.txt");

// Node.JS Challenge #1: CRUD Operations using FS Module in NodeJS

// Creating A New Folder

// fs.mkdirSync("Folder");

// Creating New File In Folder

// fs.writeFileSync("Folder/New.txt", "I AM new Created New File ");

// update Data of Existing File I  Folder

// fs.writeFileSync("Folder/New.txt", "I AM Updated Data ");

//  Add More Data in Existing File

// fs.appendFileSync("Folder/New.txt", "I AM new Created  File Data ");

//Read Data Directly Without Getting Buffer Data Through Encodind

// const dat = fs.readFileSync("Folder/New.txt" , "utf-8");
// console.log(dat);

// Rename file 
// fs.renameSync("Folder/New.txt" , "Folder/Neww.txt");

// Deleting File from Folder
// fs.unlinkSync("Folder/Neww.txt");

// Deleting Folder
// fs.rmdirSync("Folder");

/* #7: Node.JS Asynchronous File System Core Modules | Reading and Writing File Asynchronously  */

/* We have to Call Callback Function When We Are Using Asynchronous File System Core Modules  It's Compulsory Otherwise it'll Through An Error (  throw new ERR_INVALID_CALLBACK(cb); )  */

// fs.appendFile("r.txt" , "I am A file Which I screated By Using Asynchronous File System" ,
//         (error) =>
//         {
//             console.log(`File Is Created Successfully`);
//         }
// );
/*
    We Pass them function as an arguments  - A callback
    that get called when when that task is completed.
    The Callback has an arguments that tells you whether 
    operation completed successfully.
    now we need to say that what to do when fs.appendFile
    is completed (Even if it's nothing ), And Start Checking Errors

*/

// fs.appendFile("r.txt" , "I am A file Which I screated By Using Asynchronous File System with updated data" ,
//         (error) =>
//         {
//             console.log(`File already Exist and data updated`);
//         }
// );

/*  Read File Data using Asynchronous File System */

// fs.readFile("r.txt" , "UTF-8" , (err , data) =>
// {

//     console.log(data);

// })

/* NODE.JS #8: Synchronous vs Asynchronous Programming in NODE JS  */

const data = fs.readFileSync("r.txt","utf-8");
console.log(data);
console.log(` I am Statement after readFileSync`);