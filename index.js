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

function mergejson(){
    var merged = arguments[0];
    for (var i=1; i < arguments.length; i++){
        var dominant = merged;
        var recessive = arguments[i];
        merged = merge(dominant, recessive);
    }
    return merged;
}


module.exports = mergejson;
