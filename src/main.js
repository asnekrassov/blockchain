const { Blockchain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('e6ff0805a3a0e29d0ea668ae72533e4d7e58fcfcb5b46a41db6d6d4f109feac8');
const myWalletAddress = myKey.getPublic('hex');

let a13Coin = new Blockchain();

const tx1 = new Transaction(
    myWalletAddress,
    'public key goes here',
    10
)
tx1.signTransaction(myKey);
a13Coin.addTransaction(tx1);

console.log('\nStart the miner...');
a13Coin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is ', a13Coin.getBalanceOfAddress(myWalletAddress));

a13Coin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', a13Coin.isChainValid());