import { EmojisType } from '@types'

import { KeyToIcon } from './types'

export const EmojiTypeToIconMap: KeyToIcon = {
  [EmojisType.LoveEmoji]: 'smile',
  [EmojisType.SmileEmoji]: 'smile',
  [EmojisType.SadEmoji]: 'sad',
  [EmojisType.LaughEmoji]: 'laugh',
}
