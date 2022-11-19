import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'JOKER',
    tokenAddress: '0xC7980F82A4fb8970219E35e6Fcac98A6f32B2325',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xC7980F82A4fb8970219E35e6Fcac98A6f32B2325',  // token address
    contractAddress: {
      97: '',
      56: '0x4EA166Fa54A7bc245597dbe699ab852199f927EB',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
