
/* Playlist link For this practice 
Link : https://www.youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8 */



//*#1 Running our First Node.JS Script */

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

/* Synchronous Method  */
// const data = fs.readFileSync("r.txt","utf-8");
// console.log(data);
// console.log(` I am Statement after readFileSync`);

/*Asynchronous Method */

//  fs.readFile("r.txt","utf-8" , (err , data) =>{

//     console.log(data);
// });

// console.log(`I am Statement after readFile Asynchronous Method`);

/* Node.JS Challenge #2: Asynchronous CRUD Operations using File System Modules in NodeJS */

// creating New Folder

// fs.mkdir("Talha" , (err)=>
// {
//     console.log(`Folder Crated Successfully`);
// })

/* Create File in new folder */

// fs.writeFile("./Talha/file.txt", "Hello I am text in newly created file" , (err)=>
// {
//     console.log(`i am newly created file `);
// })

/* Append Data in new file */

// fs.appendFile("./Talha/file.txt" , "I am newly appended data " , (err)=>
// {
//     console.log(`The data is Appended successfully`);
// })

/* Read Data from file without  buffer */
// fs.readFile("./Talha/file.txt" , "utf-8" , (err , data)=>
// {
//     console.log(data);
// });

/* renname the file  */

// fs.rename("./Talha/file.txt" , "./Talha/file_.txt" , (err)=>
// {
//     console.log(`File renamed successfully`);

// })

/* Delete File from folder  */

// fs.unlink("./Talha/file_.txt" , ()=>
// {
//     console.log(`File deleted successfully`);
// });

/* Delete  folder  */

// fs.rmdir("./Talha" , (err)=>
// {
//     console.log(`Folder deleted successfuly`);
// })

/*  Node JS Tutorial #10 ||  Node.JS OS Module To Get Operating System Info  */

const os = require("os");

// Os Version
// console.log(os.arch());

// // Free Memoryyy
// const memory = os.freemem();
// console.log(`${memory/1024/1024/1024}`);

// // Total Memory Memoryyy
// const memory = os.totalmem();
// console.log(`${memory/1024/1024/1024}`);

// // Host Name
// const Name = os.hostname();
// console.log(`${Name}`);

// // Temp Folder
// console.log(os.tmpdir());

// // Os type
// console.log(os.type());

/* 📁 PATH Module In Node.JS ||  Node JS Tutorial #11 */

const path = require("path");
// // Directory name
// console.log(path.dirname("C:/Users/tkash/Desktop/NodeJs_Thapa_Technical/index.js"));

// File Extenstion name
// console.log(path.extname("C:/Users/tkash/Desktop/NodeJs_Thapa_Technical/index.js"));

// // Basename tells about the file whoom we're dealing with
// console.log(path.basename("C:/Users/tkash/Desktop/NodeJs_Thapa_Technical/index.js"));

/* The path.parse() method returns an object whose properties represent 
significant elements of the path. Trailing directory separators are ignored
, see path.sep.
The returned object will have the following properties:
    dir <string>
    root <string>
    base <string>
    name <string>
    ext <string> 
*/
// console.log(path.parse("C:/Users/tkash/Desktop/NodeJs_Thapa_Technical/index.js"));

/* Node.JS #12: How to CREATE and EXPORT Our Own Modules */

/* Using Our Exported module  */
// const add = require("./Module")
// console.log(add(1,5));

/* Using multiple exported modules */

const mod = require("./Module");

// checking all modules are exported or not

// console.log(mod);

// Using exported modules one by one
// console.log(mod.sub(50,20));
// console.log(mod.add(50,20));
// console.log(mod.mul(5,2));
// console.log(mod.div(50,2));

// Now We are doing it with the help of object destructuring

// const {add , mul , div , sub} = require("./Module");
// console.log(`The output is ${sub(50,20)}`);
// console.log(`The output is ${add(50,20)}`);
// console.log(`The output is ${mul(5,2)  }`);
// console.log(`The output is ${div(50,2) }`);

/* #13 Import NPM Module in Node.JS  */

// Using npm imported module 

// const chalk = require("chalk");
// const validator = require("validator");
// // // console.log(chalk.blue(`Hello my color is changed by chalk npm package `));
// // console.log(chalk.blue.underline(`Hello my color is changed and i'm underlined by chalk npm package `));

// const res = validator.isEmail("tkashi@gmail.m");

// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

/* #14: Nodemon in Node.JS | Import Global NPM Module in Node JS */

/* installing Nodemon module with npm i nodemon */


// const chalk = require("chalk");
// const validator = require("validator");
// const res = validator.isEmail("tkashi@gmail.com");
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

/* Node JS #15: Module Wrapper Function || this is an explaination video so watch the video  */

/* #16: Creating Our Own Web Server in Node.JS | HTTP Module in Node JS */

// const http = require("http");

// const server = http.createServer((req,res ) =>
// {
//         res.end("Hellow  I am respose from server")
// });

// server.listen(8000, "127.0.0.1" , ()=>
// {
//     console.log("Listening from the  port 8000  and my own server is creayed successfully");
// });

/* #17: Node JS Routing | Handled HTTP Requests in Node.JS */

// const http = require("http");

// const server = http.createServer((req,res ) =>
// {
//         if(req.url==="/")
//         {
//             res.end("Hellow  I am respose from server")
//         }
//         else if(req.url==="/contact")
//         {
//             res.end("Hellow  I am respose from contact page")
//         }
//         else if(req.url==="/about")
//         {
//             res.end("Hellow  I am respose from about page")
//         }
//         else
//         {
//             res.writeHead(404);
//             res.end("Error 404 page not found")
//         }
       
// });

// server.listen(8000, "127.0.0.1" , ()=>
// {
//     console.log("Listening from the  port 8000  and my own server is created successfully");
// });

/* #18: Complete JSON in Node JS */

const Biodata = {
    name : "Talha",
    age :20,
    class:"BSCS",
    roll_num:"BG480407"
}

// console.log(Biodata.name);

// now we are goimg to convert our given data in JSON format

// const data = JSON.stringify(Biodata);
// console.log(data);

/*  Doing A Task

    1. Covert Data Into json
    2. Add  converted data into new file
    3. read data from file
    4. again convert data into orignal object 
    5, then console orignal object

*/
 
// Converting Data into Json
// const dataaaa = JSON.stringify(Biodata);
// Write Converted Data into new file
// fs.writeFile("JsonData.json" , dataaaa , (err)=>
// {
//     console.log(`The File Convertion is done`);
// });

// fs.readFile("JsonData.json" , "utf-8", (err , data)=>
// {
//     //console.log(data);
//     const orgdata = JSON.parse(data);
//     console.log(orgdata)
// });

/* #19: Create Simple API In Node JS */

// const http = require("http");

// const server = http.createServer((req,res ) =>
// {
//         if(req.url==="/")
//         {
//             res.end("Hellow  I am respose from server")
//         }
//         else if(req.url==="/contact")
//         {
//             res.end("Hellow  I am respose from contact page")
//         }
//         else if(req.url==="/userapi")
//         {
//             fs.readFile(`${__dirname}/UserApi.json` , "utf-8" , (err , data) =>
//             {
//                 res.end(data);
//             })
            
//         }
//         else
//         {
//             res.writeHead(404);
//             res.end("Error 404 page not found")
//         }
       
// });

// server.listen(8000, "127.0.0.1" , ()=>
// {
//     console.log("Listening from the  port 8000  and my own server is created successfully");
// });

/* #20: Events Module in Node.JS | Handling Events in Node.js with EventEmitter */

/* Node.js has a built-in module, called "Events",
 where you can create-, fire-, and listen for- your own events.
To include the built-in Events module use the require() method. 
In addition, all event properties and methods are an instance of an EventEmitter object. 
To be able to access these properties and methods, create an EventEmitter object: */

// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on('SayName' , ()=>
// {
//     console.log(`My Name is Talha Zubair mayo`);
// })

// event.on('SayName' , ()=>
// {
//     console.log(`My Name is Usama Zubair mayo`);
// })
// event.on('SayName' , ()=>
// {
//     console.log(`My Name is Sikandar Zubair mayo`);
// })

// event.emit("SayName");

// event.on('Det' , (fname , Lname , )=>
// {
//     console.log(`My Name is ${fname} ${Lname} mayo`);
// })

// event.emit("Det", "Talha" , "Kashi");

/* #21: Streams and Buffer in Node JS with Example | Readable & Writable Streams in Node.JS */

const http = require("http");
const server = http.createServer();

server.on("request" , (req , res)=>
{
    // fs.readFile("Rdata.txt" , "utf-8" , (err , data)=>
    // {
    //     if(err) return console.log(err);

    //     res.end(data.toString());
    // })

        /* 2nd Way
        
            1.Reading From a Stream
            2.Create A Readable Stream
            3.Handle Stream Events ---> data , end , error
        */

            // const rstream = fs.createReadStream("Rdata.txt");
            // rstream.on('data' , (chunkdata)=>
            // {
            //     res.write(chunkdata);
            // })

            // rstream.on('end' , ()=>
            // {
            //     res.end();
            // })

            // rstream.on('error' , (err)=>
            // {
               
            //     res.end(`File Not found`);
            // })


           /*  #22: Stream Pipes in Node JS  */
           
           /* 3rd Way */

           const rstream = fs.createReadStream("Rdata.txt");

           rstream.pipe(res);

        });

server.listen(8000, "127.0.0.1");
