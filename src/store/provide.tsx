import type React from 'react'
import { createContext } from 'react'
import { useImmerReducer } from 'use-immer'
import type { Actions } from './actions'
import type { State } from './reducer'
import { reducer } from './reducer'

export interface ContextProps {
  state: State
  mode: 'editor' | 'render'
  dispatch: (v: Actions) => void
}

const defaultContext: ContextProps = {
  state: {
    cld: { user: '', date: new Date(), children: [] },
    selectedNode: { id: '', name: '' },
  },
  mode: 'editor',
  dispatch: () => void 0,
}

export type ContextState = ContextProps['state']
export type ContextDispatch = ContextProps['dispatch']
export const AppContext = createContext(defaultContext)

export const AppProvider: React.FC<{ mode: ContextProps['mode'], children: React.ReactNode }> = (props) => {
  const { mode = 'editor', children } = props
  const [state, dispatch] = useImmerReducer(reducer, defaultContext.state)

  return (
    // eslint-disable-next-line react/no-unstable-context-value
    <AppContext.Provider value={{ state, mode, dispatch }}>{children}</AppContext.Provider>
  )
}
