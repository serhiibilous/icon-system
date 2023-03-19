import { mainIcons } from './icons'
import { IconProps } from './types'
import { IconContainer } from './icon-container'

export function Icon({ name, size }: IconProps) {
  const IconComponent = mainIcons[name]

  return (
    <IconContainer size={size}>
      <IconComponent />
    </IconContainer>
  )
}
