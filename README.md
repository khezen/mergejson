Merge 2 objects into onecreating a new object.
Works in Node.js and a terminal.

# Node.js Usage

```
npm install merge-json-documents --save
```

```
var merge = require('merge-json-documents')

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
npm install -g merge-json-documents
```
```
merge-json-documents path/to/dominant.json path/to/recessive.json
```