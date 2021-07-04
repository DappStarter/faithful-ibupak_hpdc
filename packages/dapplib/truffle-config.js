require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid area fringe speak guard render remember clump install loan food giant'; 
let testAccounts = [
"0xbc05c0c26f3ef7dc34a7e83a58b85ae27a89987d6c192c23a59cbafe753b1b0b",
"0x94dfc2bc91669ed9a9ee4ba774df096829c85b064cfcdc1213014848582fa1f1",
"0x0ed474d283dfe352023574da808cae8007642a1080a22af8228b138c75954a9d",
"0xdac16bc6f9de5fe6c13bce2c1bdd2bde3f7164a1af044b056eafdf225fd8b571",
"0xfaadb0a9cd9dc2db2ae725ec71ac6ae6e67dc6a2cf52ec31f44c5639171cd363",
"0x544de6a924bbab3688f175f4007721f20cc637eb1090f268107a17034ffe61d7",
"0xa8f5813302867b5e55d1bdd6a3ce75f8932ccbe12c51db36a3e7f50a69b35961",
"0x7ecd2aede1ba4685ed2dab8280ae98615bbb2f2e11ea16a1e2590f9e94c1ddee",
"0x09f12bec782eccbb6ebb87cff98f3205b3e20d9d722a97c7b137be7908b291e9",
"0x8cf8955ed9e3524f0efe36155f1de0f6216ccf0ef5b167ad8926a414e00c0f12"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


