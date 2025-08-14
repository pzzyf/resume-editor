import type { State } from './reducer'
import React, { createContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { reducer } from './reducer'

export interface ContextType {
  state: State
  mode: 'editor' | 'render'
  dispatch: (v: unknown) => void
}

const defaultContext = {
  state: {
    cld: { user: '', date: new Date(), children: [] },
    selectNode: { id: '', name: '' },
  },
  mode: 'editor' as const,
  dispatch: () => {},
}

export const AppContext = createContext<ContextType>(defaultContext)
export function AppProvider({ children, mode = 'editor' }: { children: React.ReactNode, mode: ContextType['mode'] }) {
  const [state, dispatch] = useImmerReducer(reducer, defaultContext.state)
  return (
    <AppContext.Provider value={{ state, dispatch, mode }}>
      {children}
    </AppContext.Provider>
  )
}
