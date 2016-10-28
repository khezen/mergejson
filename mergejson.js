"use strict";
var deepcopy = require('deepcopy');

function handleInput(input){
     if(typeof input !== "object" && typeof input !== "string" ){
         throw new Error("arguments has to be strings or objects");
     }
    if(typeof input === "string"){
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
        if(recessive.hasOwnProperty(prop) && !dominant[prop]){
            merged[prop] = deepcopy(recessive[prop]);
        }
    }
    return merged;
}

function mergejson(){
    var args = arguments;
    if(args[0] instanceof Array){
        args = args[0];
    }
    var merged = deepcopy(args[0]);
    for (var i=1; i < args.length; i++){
        var recessive = deepcopy(args[i]);
        merged = merge(merged, recessive);
    }
    return merged;
}

module.exports = mergejson;
