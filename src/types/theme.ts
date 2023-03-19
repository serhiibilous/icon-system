import { Dispatch, SetStateAction } from 'react'
import { IconSizes } from '@components'

export type ThemeProps = {
  theme?: string
  setTheme: Dispatch<SetStateAction<string>>
  iconSize?: IconSizes
  setIconSize: Dispatch<SetStateAction<IconSizes>>
}
