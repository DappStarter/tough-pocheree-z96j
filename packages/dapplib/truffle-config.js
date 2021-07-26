require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strike dash misery arrow include clinic equal genuine'; 
let testAccounts = [
"0xd05313aa51c8322871d0b85cac409ff1da9e71f21b91303ab6a0ba281885b171",
"0xb4eae7fea006c4bfedfeba9d688bbb953024780682d8cc533e9159585582f7f3",
"0x737ea92cc233b031cd403be2165911ebd09625ed23e309d684f87dbf2f82f685",
"0x28f394c35e52ef7435636a056276dfbe12f2d4be9563ead57e1977aea2dea4df",
"0xd484bf801107fe21ea2c06db26fd9898ebd6c32f337ddb4839ebea79d37ce3b8",
"0x4f8c0be5d01808382b58c8d98bbea97a0f2f8c8e9cb21e4bc6a4390b5c961b51",
"0xcfe47253d87b54146bd75231969565e5efe168afd29ca2f271d32c82ba4fc3ca",
"0xd105928879eba3a7f27ec5dd6430ee50ae6691f3029d6dc478b6731d05e841d9",
"0xc441879279b397ccad245b0e5a75c8c5ea65196d7a2f13c0bc9db7b0c64d64da",
"0x5248d0e37b705fe2f7116b1b8be51efa19da3a8663ce7425020b597f9a1ecfa4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

