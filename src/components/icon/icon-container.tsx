import { PropsWithChildren } from 'react'
import clsx from 'clsx'

import { IconSizes } from './types'
import { getDimension } from './get-dimention'

type IconContainerProps = PropsWithChildren & {
  size?: IconSizes
}

export function IconContainer({
  children,
  size = 'normal',
}: IconContainerProps) {
  const iconSize = getDimension(size)

  return (
    <div
      className={clsx(
        `inline-flex items-center justify-center align-bottom w-${iconSize} h-${iconSize}`
      )}
    >
      {children}
    </div>
  )
}
