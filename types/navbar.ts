import type { Tab } from '~/interfaces/common'
import type { Media } from './common'

export type NavbarLocales = {
  links: NavbarLink[]
  icons: Media[]
  buttons: Button
}
type NavbarLink = {
  name: string
  url: string
}
type Button = {
  login: string
  register: string
}

export type NavbarMobileLocales = {
  links: NavbarLink[]
  tabs: Tab[]
}
