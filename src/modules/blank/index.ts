import type { Layout } from 'react-grid-layout'
import { BlankControl } from './control'
import type { LocalComponent } from '@/types/components'

const BLANK_KEY = 'blank' as const
declare module '../../types/components' {
  interface LocalComponentMap {
    [BLANK_KEY]: DeepMerge<
      BaseLocalComponent,
      { name: typeof BLANK_KEY, config: { layout: Layout } }
    >
  }
}

export const blank: LocalComponent = {
  type: 'local',
  name: BLANK_KEY,
  config: {
    layout: {
      i: '',
      x: 0,
      y: 0,
      w: 10,
      h: 3,
      isDraggable: true,
      isResizable: true,
      minW: 1,
      minH: 1,
    },
  },
  module: {
    control: BlankControl,
  },
}
