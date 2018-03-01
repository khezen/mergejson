const assert = require("assert"),
    should = require('should'),
    mergejson = require('../mergejson');

var one = {
    '1':'hello',
    '4':{
        '4.1': 'jhon',
        '4.2': 'doe'
    },
    is: {
        foo: false,
        bar: false
    },
    arr: ["a", 2],
    obj_array: [{id: 'foo'}]
};
var two = {
    '2': 'world',
    '4':{
        '4.1': 'jhon',
        '4.2': 'lennon',
        '4.3': 'from two'
    },
    obj_array: [{id: 'bar'}],
    is: {
        foo: true,
        bar: false
    },
};
var three = {
    '3': '!',
    '4':{
        '4.1': 'jhon',
        '4.2': 'lennon',
        '4.3': 'from three'
    },
    arr: [2, "b"],
    is: {
        third: false
    }
};

mergejson(one, two, three).should.eql({ '1': 'hello',
    '2': 'world',
    '3': '!',
    '4': { '4.1': 'jhon', '4.2': 'doe', '4.3': 'from two' },
    is: {
        foo: false,
        bar: false,
        third: false
    },
    arr: [ 'a', 2, 'b' ],
    obj_array: [ { id: 'bar' }, { id: 'foo' } ] });


mergejson([one, two, three]).should.eql({ '1': 'hello',
    '2': 'world',
    '3': '!',
    '4': { '4.1': 'jhon', '4.2': 'doe', '4.3': 'from two' },
    is: {
        foo: false,
        bar: false,
        third: false
    },
    arr: [ 'a', 2, 'b' ],
    obj_array: [ { id: 'bar' }, { id: 'foo' } ] });

mergejson(one,two).should.eql({ '1': 'hello',
    '2': 'world',
    '4': { '4.1': 'jhon', '4.2': 'doe', '4.3': 'from two' },
    arr: [ 'a', 2 ],
    is: {
        foo: false,
        bar: false
    },
    obj_array: [ { id: 'bar' }, { id: 'foo' } ] });


mergejson(one,three).should.eql({ '1': 'hello',
    '3': '!',
    '4': { '4.1': 'jhon', '4.2': 'doe', '4.3': 'from three' },
    is: {
        foo: false,
        bar: false,
        third: false
    },
    arr: [ 'a', 2, 'b' ],
	obj_array: [ { id: 'foo' } ] });
	
mergejson(
	{
		date: new Date(0)
	},
	{
		date: new Date()
	}).should.eql({
		date: new Date(0)
	});

mergejson(
	{
		date: new Date(1)
	},
	{
		date: new Date(0)
	}).should.eql({
		date: new Date(1)
	});

mergejson(
	{
		date: new Date(0)
	},
	{
		date: null
	}).should.eql({
		date: new Date(0)
	});

mergejson(
	{
		date: null
	},
	{
		date: Date(0)
	}).should.eql({
		date: null
	});