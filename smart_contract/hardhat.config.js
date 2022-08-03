
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/VVJAQytzorYL_WUl2R2VxsnWTlV216q_',
      accounts: [ '6f9aee90adc0ed7d783a2b4da3b88052f6c425dadad74e8dcb84311fc634254e' ]
    }
  }
}