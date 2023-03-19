import { useContext, useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { ThemeContext } from '@constants'

const colors = [
  { name: 'pink' },
  {
    name: 'purple',
  },
  { name: 'blue' },
  { name: 'green' },
  {
    name: 'yellow',
  },
]

export function ControlPanelColors() {
  const themeContext = useContext(ThemeContext)
  const [selectedColor, setSelectedColor] = useState(colors[0])

  useEffect(() => {
    themeContext?.setTheme(selectedColor.name)
  }, [selectedColor, themeContext])

  return (
    <div className="absolute p-2 left-0 top-0">
      <RadioGroup value={selectedColor} onChange={setSelectedColor}>
        <RadioGroup.Label className="block text-sm font-medium leading-6 text-gray-900">
          Choose Theme color
        </RadioGroup.Label>
        <div className="mt-2 flex items-center space-y-2 flex-wrap w-12">
          {colors.map((color) => (
            <div key={color.name} className="'w-full">
              <RadioGroup.Option
                value={color}
                className={({ active, checked }) =>
                  clsx(
                    `ring-${color.name}-500`,
                    active && checked ? 'ring-1' : '',
                    !active && checked ? 'ring-1' : '',
                    'relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                  )
                }
              >
                <RadioGroup.Label as="span" className="sr-only">
                  {color.name}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  style={{ background: color.name }}
                  className={`h-8 w-8 rounded-full border border-black border-opacity-10 bg-${color.name}-500`}
                />
              </RadioGroup.Option>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
