import { mainIcons } from './icons'

// Defining icon names based in icons created
export type MainIconNames = keyof typeof mainIcons

// Defining types for icons sizes
export type IconSizes = 'large' | 'medium' | 'normal' | 'small'

// Combine with other types if you will have them in the future
export type IconNames = MainIconNames

//
export type KeyToIcon = {
  [id: string]: IconNames
}

// Define Prop Types for Icon component
export type IconProps = {
  name: IconNames
  size?: IconSizes
}
