import { atom } from 'recoil'

export const menuItemState = atom({
  key: 'menu',
  default: 'community'
})

export const pageState = atom({
  key: 'page',
  default: 0
})
