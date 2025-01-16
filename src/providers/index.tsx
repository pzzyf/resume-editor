import type { FC, PropsWithChildren } from 'react'
import React from 'react'
import { useRefValue } from '../hooks/useRefValue'
import { JotaiStoreProvider } from './jotai'

const ProviderComposer: FC<{
  contexts: JSX.Element[]
} & PropsWithChildren> = ({ contexts, children }) => {
  return contexts.reduceRight((kids: any, parent: any) => {
    return React.cloneElement(parent, { children: kids })
  }, children)
}

export function Providers(props: PropsWithChildren) {
  return (
    <ProviderComposer contexts={useRefValue(() => [<JotaiStoreProvider key="JotaiStoreProvider" />])}>
      {props.children}
    </ProviderComposer>
  )
}
