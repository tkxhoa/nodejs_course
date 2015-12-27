console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('name', 'Kevin');
var name = storage.getItemSync('name');
console.log('Save name is: ' + name);