import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'JOKER',
    lpAddresses: {
      97: '',
      56: '0xC7980F82A4fb8970219E35e6Fcac98A6f32B2325',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0xC7980F82A4fb8970219E35e6Fcac98A6f32B2325',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'JOKER-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x149CFBebe2D99426b5925D473cb7D76A2743B4b6',   // lp address token-bnb
    },
    tokenSymbol: 'JOKER',
    tokenAddresses: {
      97: '',
      56: '0xC7980F82A4fb8970219E35e6Fcac98A6f32B2325', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
  {
    pid: 2,
    lpSymbol: 'JOKER-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x910391f631e7f1aa6a499Ec5D8F2C019E9786FB2',   // lp address busd-bnb
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
