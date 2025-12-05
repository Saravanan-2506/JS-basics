// //Create a function greet(name, callback) that prints “Hello <name>” and then calls the callback.
// let welcome = () => {
//     console.log('Welcome');
// }

// function greet(name,callback){
//     console.log(`Hello ${name}`);
//     callback();
// }

// greet ('saravanan',welcome);

// //Write a function doMath(a, b, callback) that performs addition, subtraction, or multiplication depending on what callback is passed.
// let add =(a,b)=>{
//     console.log(a+b);
// }
// let mul =(a,b)=>{
//     console.log(a*b);
// }
// let sub =(a,b)=>{
//     console.log(a-b);
// }
// function doMath(num1,num2,callback){
//     callback(num1,num2);
// }

// doMath(2,3,add);
// doMath(2,3,sub);
// doMath(2,3,mul);
// //Create a function waitAndSay(message, callback) that prints the message after 1 second and then runs the callback.
// function waitAndSay(message ,callback){
//     setTimeout(()=>{
//         console.log(message);
//         callback();
//     },1000);
// }

// let msg =()=>{
//     console.log('This is a callback executed after one min');
// }

// waitAndSay('Hello',msg);
// //Write a function step1(callback) that waits 1 second and prints “Step 1 done”, then calls callback.
// let step1=(callback)=>{
//     console.log('Step 1 done');
//     callback();
// }
// let step2=(callback)=>{
//     console.log('Step 2 done');
//     callback();
// }
// let step3=(callback)=>{
//     console.log('Step 3 done');
//     callback();
// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log('Every steps completed');
//         })
//     })
// })

// // Create a function downloadFile(url, callback) that simulates:
// // Downloading <url>...
// // Download complete!
// // with a 2-second delay before calling callback.

// function downloadFile(url,callback){
//     console.log(`Downloading ${url}`);
//     callback();
// }

// downloadFile('https:youtube',()=>{
//     setTimeout(()=>{
//         console.log('Download complete');
//     },2000);
// })


