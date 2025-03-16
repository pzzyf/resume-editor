import type { LocalComponentConfig } from 'src/types/components'
import type { Actions } from './actions'
import { actions } from './actions'

// Component Layout Data
export interface CLD { user: string, date: Date, children: LocalComponentConfig[] }
export interface SelectedNode { id: string, name: string } // id: uuid, type: module.name
export interface State {
  cld: CLD
  selectedNode: SelectedNode
}

export function reducer(state: State, action: Actions) {
  switch (action.type) {
    case actions.INIT_STATE: {
      state.cld = action.payload
      break
    }
  }
}
