"use strict";
var fs = require('fs');

function handleInput(input){
     if(!(input instanceof Object) && !(input instanceof String) ){
         throw new Error("arguments has to be strings or objects");
     }
    if(input instanceof String){
        input = JSON.parse(input);
    }
    return input;
}

function merge(dominant, recessive){
    
    dominant = handleInput(dominant);
    recessive = handleInput(recessive);

    var merged = {};
    var prop = null;
    for (prop in dominant){
        if(dominant.hasOwnProperty(prop)){
            if(recessive[prop] && dominant[prop] instanceof Object){
                merged[prop] = merge(dominant[prop], recessive[prop]);
            }else{
                merged[prop] = dominant[prop];
            }    
        }
    }
    for (prop in recessive){
        if(!dominant[prop]){
            merged[prop] = recessive[prop];
        }
    }
    return merged;
}

if(process.argv[2] && process.argv[3]){
    fs.readFile(process.argv[2], 'utf8', function (err, dominant) {
        if (err) {
            throw err;
        }else{
            fs.readFile(process.argv[3], 'utf8', function (err, recessive) {
                if (err) {
                    throw err;
                }else{
                    console.log(merge(dominant, recessive));
                }
            });
        }
    });
}

module.exports = merge;
