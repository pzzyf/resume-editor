export interface TemplateConfig {
  name: string
  image: string
  template: string
}

export const TEMPLATECONFIG: TemplateConfig[] = [
  {
    name: 'afe1',
    image: '/public/templates/zyf/index.jpg',
    template: '/public/templates/zyf/index.json',
  },
]

export function templateLoader(src: string) {
  return window.fetch(src)
    .then(res => res.json())
    .catch(() => null)
}
