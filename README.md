Merge 2 documents into a new document.

# Node.js Usage

```
npm install mergejson --save
```

```
var mergejson = require('mergejson')

var dominant = {
    '1':'hello',
    '3':{
        '3.1': 'jhon',
        '3.2': 'doe'
    }
}
var recessive = {
    '2': 'world',
    '3':{
        '3.1': 'jhon',
        '3.2': 'lennon'
    }
}

console.log(mergejson(dominant, recessive));
// -> {'1': 'hello', '2': 'world', '3': {'3.1': 'jhon', '3.2': 'doe'}} 


var one = {
    '1':'hello',
    '4':{
        '4.1': 'jhon',
        '4.2': 'doe'
    }
}
var two = {
    '2': 'world',
    '4':{
        '4.1': 'jhon',
        '4.2': 'lennon',
        '4.3': 'from two'
    }
}

var three = {
    '3': '!',
    '4':{
        '4.1': 'jhon',
        '4.2': 'lennon',
        '4.3': 'from three'
    }
}

console.log(mergejson(one, two, three));
// -> {'1': 'hello', '2': 'world', '3': '!', '4': {'4.1': 'jhon', '4.2': 'doe', '4.3': 'from two'}} 

console.log(mergejson([one, two, three]));
// -> {'1': 'hello', '2': 'world', '3': '!', '4': {'4.1': 'jhon', '4.2': 'doe', '4.3': 'from two'}} 

```