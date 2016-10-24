"use strict";
var fs = require('fs');
var deepcopy = require('deepcopy');

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
    var args = arguments;
    if(args[0] instanceof Array){
        args = args[0];
    }
    var merged = args[0];
    for (var i=1; i < args.length; i++){
        var dominant = deepcopy(merged);
        var recessive = args[i];
        merged = merge(dominant, recessive);
    }
    return merged;
}

module.exports = mergejson;
