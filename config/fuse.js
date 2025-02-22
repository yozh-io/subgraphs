const NATIVE_ADDRESS = '0x0be9e53fd7edac9f859882afdda116645287c629'
const WETH_ADDRESS = '0xa722c13135930332eb3d749b2f0906559d2c5b99'
const WBTC_ADDRESS = '0x33284f95ccb7b948d9d352e1439561cf83d8d00d'
const USDC_ADDRESS = '0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5'
const DAI_ADDRESS = '0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba'
const USDT_ADDRESS = '0xfadbbf8ce7d5b7041be672561bba99f79c532e10'
const FUSD_ADDRESS = '0x249be57637d8b013ad64785404b24aebae9b098b'
module.exports = {
  network: 'fuse',
  blocks: {
    address: '0x43ea90e2b786728520e4f930d2a71a477bf2737c',
    startBlock: 12943648,
  },
  legacy: {
    native: { address: NATIVE_ADDRESS },
    whitelistedTokenAddresses: [
      // IMPORTANT! The native address must be included for pricing to start
      NATIVE_ADDRESS,
      WETH_ADDRESS,
      WBTC_ADDRESS,
      USDC_ADDRESS,
      DAI_ADDRESS,
      USDT_ADDRESS,
      FUSD_ADDRESS,
    ],
    stableTokenAddresses: [USDC_ADDRESS, DAI_ADDRESS, USDT_ADDRESS, FUSD_ADDRESS],
    minimumNativeLiquidity: 15000,
    minimum_usd_threshold_new_pairs: '3000',
    factory: {
      address: '0x43ea90e2b786728520e4f930d2a71a477bf2737c',
      initCodeHash: '0x1901958ef8b470f2c0a3875a79ee0bd303866d85102c0f1ea820d317024d50b5',
      startBlock: 12943648,
    },
  },
  furo: {
    stream: { address: '0x0000000000000000000000000000000000000000', startBlock: 0 },
    vesting: { address: '0x0000000000000000000000000000000000000000', startBlock: 0 },
  },
  auctionMaker: { address: '0x0000000000000000000000000000000000000000', startBlock: 0 },
  staking: { address: '0x0000000000000000000000000000000000000000', startBlock: 0 },
  xswap: {
    address: '0xd045d27c1f7e7f770a807b0a85d8e3f852e0f2be',
    startBlock: 43250231,
  }
}
