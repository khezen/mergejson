var mergejson = require('../mergejson');

var one = {
    '1':'hello',
    '4':{
        '4.1': 'jhon',
        '4.2': 'doe'
    },
    arr: ["a", 2]
};
var two = {
    '2': 'world',
    '4':{
        '4.1': 'jhon',
        '4.2': 'lennon',
        '4.3': 'from two'
    }    
};
var three = {
    '3': '!',
    '4':{
        '4.1': 'jhon',
        '4.2': 'lennon',
        '4.3': 'from three'
    },
    arr: [2, "b"]
};
//mergejson([one, two, three])
console.log(mergejson(one, two, three));
console.log(mergejson([one, two, three]));

console.log(mergejson(one,two));
console.log(mergejson(one,three));