var fs = require('fs')

fs.readFile("dosya.txt","utf-8",function(hata,data){
    if(hata){
        throw hata;
    }
    console.log(data);
})
fs.writeFile("dosya2.txt","Bilal İyisoy",function(hata){
    if(hata){
        throw hata;
    }
    console.log("Yazıldı");
})
fs.appendFile("dosya2.txt","Karadeniz Teknik Üniversitesi",function(hata){
    if(hata){
        throw hata;
    }
    console.log("Yazıldı");
})
fs.unlink("dosya2.txt",function(hata){
    if(hata){
        throw hata;
    }
    console.log("Silindi")
})