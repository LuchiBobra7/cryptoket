import Instagram from '@/components/icon/instagram'
import Twitter from '@/components/icon/twitter'
import Telegram from '@/components/icon/telegram'
import Discord from '@/components/icon/discord'
import { SOCIAL_LINKS } from '@/constants/social-links'

const { INSTAGRAM, TWITTER, TELEGRAM, DISCORD } = SOCIAL_LINKS

export const socialLinkItems = [
  {
    title: 'Instagram',
    href: INSTAGRAM,
    icon: <Instagram />,
  },
  {
    title: 'Twitter',
    href: TWITTER,
    icon: <Twitter />,
  },
  {
    title: 'Telegram',
    href: TELEGRAM,
    icon: <Telegram />,
  },
  {
    title: 'Discord',
    href: DISCORD,
    icon: <Discord />,
  },
]
