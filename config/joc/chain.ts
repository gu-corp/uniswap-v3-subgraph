import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

// JOC_MAINNET (chainId = 81)

export const FACTORY_ADDRESS = '0x20A49214692A43CF6223b119385af63a21BdF4F7'

export const REFERENCE_TOKEN = '0x03527b82f384184097295fc60be0B59B8FE06E00' // WJOC

export const STABLE_TOKEN_POOL = '0x9CdDeec03DE53d3Bda5A5fdC35081670a20B857e' // WJOC/USDTX 0.01%

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '10000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('1')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680
export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

export const WHITELIST_TOKENS: string[] = [
  '0x03527b82f384184097295fc60be0B59B8FE06E00', // WJOC
  '0xe18e898E5843E8a8EA7A1C4AF08730DcA6689aA9', // USDTX
  '0x538F7567f16cbE40d051e9f2928d215343D9A13A', // USDCX
]

export const STABLE_COINS: string[] = [
  '0xe18e898E5843E8a8EA7A1C4AF08730DcA6689aA9', // USDTX
  '0x538F7567f16cbE40d051e9f2928d215343D9A13A', // USDCX
]

export const SKIP_POOLS: string[] = []
export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
