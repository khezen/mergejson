Merge 2 documents into a new document.
Works in Node.js and a terminal.

# Node.js Usage

```
npm install mergejson --save
```

```
var merge = require('mergejson')

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

console.log(merge(dominant, recessive));
// -> {'1': 'hello', '2': 'world', '3': {'3.1': 'jhon', '3.2': 'doe'}} 

```

# Terminal Usage

```
npm install -g mergejson
```
```
mergejson path/to/dominant.json path/to/recessive.json
```