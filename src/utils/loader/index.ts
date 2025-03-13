import type { LocalComponent } from '@/types/components'

export const components: LocalComponent[] = []

declare global {
  interface Window {
    store: Record<string, LocalComponent>
  }
}

window.store = window.store ? window.store : {}

export function register(...registerComponents: LocalComponent[]) {
  components.push(...registerComponents)
  registerGlobalStore(...registerComponents)
}

export function registerGlobalStore(...registerComponents: LocalComponent[]) {
  registerComponents.forEach((item) => {
    if (item.name in components)
      console.warn(`${item.name} is duplicate`)
    window.store[item.name] = item
  })
}
