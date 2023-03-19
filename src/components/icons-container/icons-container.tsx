import { useContext } from 'react'

import { EmojiTypeToIconMap, Icon } from '@components'
import { ThemeContext } from '@constants'

import { emojis } from '../../mock-data'

export function IconsContainer() {
  const themeContext = useContext(ThemeContext)

  return (
    <div className="flex flex-wrap gap-y-6">
      <div className="flex gap-3 w-full justify-center">
        <Icon name="facebook" size={themeContext?.iconSize} />
        <Icon name="linkedin" size={themeContext?.iconSize} />
        <Icon name="github" size={themeContext?.iconSize} />
        <Icon name="twitter" size={themeContext?.iconSize} />
      </div>
      <div className="flex gap-3 text-green-700 justify-center w-full">
        <Icon name="user" size={themeContext?.iconSize} />
        <Icon name="lock" size={themeContext?.iconSize} />
        <Icon name="image" size={themeContext?.iconSize} />
        <Icon name="message" size={themeContext?.iconSize} />
      </div>
      <div className="flex gap-3 text-yellow-400 justify-center w-full">
        {emojis.map((emoji) => {
          return (
            <Icon
              key={emoji.icon}
              name={EmojiTypeToIconMap[emoji.icon]}
              size={themeContext?.iconSize}
            />
          )
        })}
      </div>
    </div>
  )
}
