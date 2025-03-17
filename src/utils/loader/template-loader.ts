// eslint-disable-next-line node/prefer-global/process
const BASE_PATH = process.env.NODE_ENV === 'development' ? '/public' : ''

export interface TemplateConfig {
  name: string
  image: string
  template: string
}

export const TEMPLATECONFIG: TemplateConfig[] = [
  {
    name: 'afe1',
    image: `${BASE_PATH}/templates/zyf/index.jpg`,
    template: `${BASE_PATH}/templates/zyf/index.json`,
  },
]

export function templateLoader(src: string) {
  return window.fetch(src)
    .then(res => res.json())
    .catch(() => null)
}
