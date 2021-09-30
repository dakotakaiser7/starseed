import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Homee',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Docs',
    icon: 'InfoIcon',
    href: 'https://docs.starseed.exchange/'
  },
  {
    label: 'Audit',
    icon: 'InfoIcon',
    href: 'https://solidity.finance/audits/StarSeed/'
  }  
]

export default config
