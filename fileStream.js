var fs = require('fs')

fs.readFile("file.txt", "utf8", function(hata, data){
    if(hata){
        throw hata;
    }
    console.log(data);
});

var fs = require('fs')

// fs.writeFile("file2.txt", "Aleyna Yılmaz", function(hata){
//     if(hata){
//         throw hata;
//     }
//     console.log("Written");
// });

// fs.appendFile("file2.txt", "Aleyna Yıldırım", function(hata){
//     if(hata){
//         throw hata;
//     }
//     console.log("Added");
// });

fs.unlink("file2.txt", function(hata){
    if(hata){
        throw hata;
    }
    console.log("Deleted");
});