#!/usr/bin/env node
var repl=require('repl');
var run=require('../boot');
var util=require('util');



var prompt=repl.start({prompt:'NodeLich>>>'});

console.log("\r\nWellcome to use NodeLich!");
util.print( 'Le chat dit: ' +'The cat says: ');




