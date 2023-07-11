const fs = require('fs')

//asynchronous way to read file
// fs.readFile('input.txt', function (ree, data) {
    
// })




//writing to file
// fs.writeFile('input.txt', 'hello', function (err) {
//    if (err) {
//     console.log('Error in writing File!');
//    } else{
//     console.log('sucess in writing file!');
//    }
// });

//append to file

// fs.appendFile('input.txt', '--sarbajit rout', 'utf8', function (err) {
//     if (err) {
//         console.log('Error in appending file!');
//     } else {
//         console.log('Sucess in appending file!');
//     }
// })


fs.unlink('input.txt', function (err) {
    if (err) {
        console.log('Error in Deleting file!');
    } else {
        console.log('Sucess in Deleting file!');
    }
});