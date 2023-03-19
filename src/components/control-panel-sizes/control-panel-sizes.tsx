import { useContext, useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { ThemeContext } from '@constants'
import { IconSizes } from '../icon'

const sizeOptions: { name: IconSizes }[] = [
  { name: 'large' },
  { name: 'medium' },
  { name: 'normal' },
  { name: 'small' },
]

export function ControlPanelSizes() {
  const themeContext = useContext(ThemeContext)
  const [size, setSize] = useState(sizeOptions[1])

  useEffect(() => {
    themeContext?.setIconSize(size.name)
  }, [size, themeContext])

  return (
    <div className="absolute top-0 right-0 p-2">
      <RadioGroup value={size} onChange={setSize}>
        <RadioGroup.Label className="text-right block text-sm font-medium leading-6 text-gray-900">
          Choose Icon Size
        </RadioGroup.Label>
        <div className="mt-2 flex gap-3">
          {sizeOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                clsx(
                  'cursor-pointer focus:outline-none',
                  active ? 'ring-1 ring-indigo-600' : '',
                  checked
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                  'text-sm flex items-center justify-center rounded-md py-1 px-2 text-sm capitalize'
                )
              }
            >
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
