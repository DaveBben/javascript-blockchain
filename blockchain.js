const Block = require('./block');

class Blockchain {
  // Initialize Blockchain with genosis block
  constructor() {
    this.chain = [new Block(0, new Date().toUTCString(), 'I am the genosis block', '0')];
  }
  // Getting the hash of the latest block in the blockchain
  getPreviousHash() {
    return this.chain[this.chain.length - 1].hash;
  }
  // Adding a new block to the chain
  addBlock(data) {
    const timeStamp = new Date().toUTCString();
    const index = this.chain.length;
    const previousHash = this.getPreviousHash();
    const newBlock = new Block(index, timeStamp, data, previousHash);
    if (this.isValid(newBlock)) {
      this.chain.push(newBlock);
    } else {
      console.log('Block is invalid');
    }
  }
  // Checking to see if the new block is valid
  isValid(newBlock) {
    const currentBlock = this.chain[this.chain.length - 1];
    if (currentBlock.index + 1 !== newBlock.index) {
      return false;
    } else if (newBlock.previousHash !== currentBlock.hash) {
      return false;
    } else if (newBlock.hash !== newBlock.calculateHash()) {
      return false;
    }
    return true;
  }

  printChain() {
    console.log(this.chain);
  }
}

module.exports = Blockchain;
