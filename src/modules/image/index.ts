import type { Layout } from 'react-grid-layout'
import type { BaseLocalComponent, LocalComponent } from 'src/types/components'
import { ImageControl } from './control'
import ImageMain from './main'
import ImageEditor from './editor'

const IMAGE_KEY = 'image' as const
declare module '../../types/components' {
  interface LocalComponentMap {
    [IMAGE_KEY]: DeepMerge<
      BaseLocalComponent,
      { name: typeof IMAGE_KEY, config: { layout: Layout } }
    >
  }
}

export const image: LocalComponent = {
  type: 'local',
  name: IMAGE_KEY,
  props: {
    src: './favicon.ico',
  },
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
    control: ImageControl,
    main: ImageMain,
    editor: ImageEditor,
  },
}
