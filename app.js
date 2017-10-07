const Blockchain = require('./blockchain');

const myChain = new Blockchain();
myChain.addBlock('Hey I am the second block');
myChain.addBlock('Hey I am the third block');
myChain.printChain();
