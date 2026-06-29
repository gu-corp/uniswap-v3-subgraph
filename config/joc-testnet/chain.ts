import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

// JOC_TESTNET (chainId = 10081)

export const FACTORY_ADDRESS = '0x5B7be42E224C3d800aa0d1a2422f8a46691d0Eb8'

export const REFERENCE_TOKEN = '0x8B85219c0767Ce4FA5ae5944d71aB4a3De27090d' // WJOCT

export const STABLE_TOKEN_POOL = '0xaC2EACF751ed85BC78429746aac28dAcc4dB34c1' // WJOCT/USDTX 0.3%

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '10000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('0.1')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680
export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

export const WHITELIST_TOKENS: string[] = [
  '0x8B85219c0767Ce4FA5ae5944d71aB4a3De27090d', // WJOCT
  '0x382eb09D8cE59968683001947EF04cB34f7A180E', // USDTX
  '0x367f476c9B5fA1e64F3d7EE19c3E4E2f76D42200' // USDCX
]

export const STABLE_COINS: string[] = [
  '0x382eb09D8cE59968683001947EF04cB34f7A180E', // USDTX
  '0x367f476c9B5fA1e64F3d7EE19c3E4E2f76D42200' // USDCX
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
