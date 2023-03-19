import { IconSizes } from './types'

export function getDimension(size?: IconSizes) {
  switch (size) {
    case 'large':
      return 16
    case 'medium':
      return 12
    case 'normal':
      return 10
    case 'small':
      return 8
    default:
      return 10
  }
}
