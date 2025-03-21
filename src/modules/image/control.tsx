import type { ControlPanelFC } from 'src/types/components'
import { image } from '.'
import { getLocalComponentConfigClone } from '@/utils/loader/components-utils'

const ImageIcon = (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path d="M704 358.5m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" />
    <path d="M919.5 136.5h-815c-22.1 0-40 17.9-40 40v671c0 22.1 17.9 40 40 40h815c22.1 0 40-17.9 40-40v-671c0-22.1-17.9-40-40-40z m-807 703V640.8l15.4-12.9c0.4-0.4 42.9-35.5 108.3-59 85.8-30.8 169-28 247.1 8.4 63.2 29.4 114.4 74.1 152.3 132.7 30.4 47.2 45.8 95 50.1 124l0.8 5.5h-574z m799 0H735.1l-1.8-12.5c-2.4-16.1-13.2-72.7-54.2-138.1 3.6-8 11.2-22.5 23.6-37.7 20.9-25.5 46-42.2 74.7-49.4 66.2-16.7 133.4 15.2 134 15.5v-51.8c-29.5-10.5-86.6-25.3-145.8-10.3-50.8 12.9-84.6 45.4-103.9 70.4-5.4 7-10 13.8-13.7 19.9-12.6-15.4-26.3-29.9-40.9-43.2-30.5-27.8-65.3-50.9-103.4-68.6-49.8-23.2-102.4-34.6-156-33.9-42.8 0.6-86.3 8.8-129.3 24.5-49.2 17.9-86.2 41.3-105.8 55.1V184.5h799v655z" />
  </svg>
)

export const ImageControl: ControlPanelFC = {
  icon: ImageIcon,
  name: '图片',
  getConfig: () => getLocalComponentConfigClone(image),
}
