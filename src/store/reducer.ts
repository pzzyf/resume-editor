import type { LocalComponentConfig } from 'src/types/components'

// Component Layout Data
export interface CLD { user: string, date: Date, children: LocalComponentConfig[] }
export interface SelectedNode { id: string, name: string } // id: uuid, type: module.name
export interface State {
  cld: CLD
  selectedNode: SelectedNode
}

export function reducer(state, action) {
  switch (action.type) {
    case 'INIT_STATE': {
      state.cld = action.payload
      break
    }
  }
}
