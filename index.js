"use strict";

function merge(dominant, recessive){
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
    merge(process.argv[2], process.argv[3]);
}

module.exports = merge;
