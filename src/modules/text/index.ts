import { TextControl } from './control'
import type { LocalComponent } from '@/types/components'

const TEXT_KEY = 'image' as const

export const richText: LocalComponent = {
  type: 'local',
  name: TEXT_KEY,
  config: {
    layout: {
      i: '',
      x: 0,
      y: 0,
      w: 20,
      h: 20,
      isDraggable: true,
      isResizable: true,
      minW: 2,
      minH: 2,
    },
  },
  module: {
    control: TextControl,
  },
}
