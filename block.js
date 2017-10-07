const crypto = require('crypto');

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
  }
  // Calculating the Hash for the block
  calculateHash() {
    const stringToHash = this.index + this.previousHash + this.timestamp + JSON.stringify(this.data);
    return crypto.createHash('sha256').update(stringToHash).digest('hex');
  }
}

module.exports = Block;
