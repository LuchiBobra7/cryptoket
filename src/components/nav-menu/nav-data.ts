import { ROUTES } from '@/constants/routes'

const { HOME, BIDS, MY_BIDS } = ROUTES

const navItems = [
  {
    href: HOME,
    title: 'Home',
  },
  {
    href: BIDS,
    title: 'Explore',
  },
  {
    href: MY_BIDS,
    title: 'My items',
  },
]

export default navItems
