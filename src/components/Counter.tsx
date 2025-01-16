import { useAtomValue, useSetAtom } from 'jotai'
import { counterAtom } from '../atoms/counter'
import { useEventCallback } from '../hooks/useEventCallback'

export function Counter() {
  const setCount = useSetAtom(counterAtom)
  const increment = useEventCallback(() => setCount(c => c + 1), [])
  const decrement = useEventCallback(() => setCount(c => c - 1), [])

  return (
    <div className="mb-8 mt-4 flex items-center justify-center">
      <button
        className="btn btn-ghost btn-circle mx-2 text-[1.5rem]"
        onClick={increment}
      >
        <div className="i-carbon-add" data-test-id="count-inc-btn" />
      </button>
      <div
        data-test-id="count-display"
        className="
          mx-2 select-none rounded-md
          border border-slate-600/30
          bg-slate-100/40 px-4
          py-2 dark:border-slate-400/30
          dark:bg-slate-600/40
        "
      >
        <samp>
          Count:
          <Count />
        </samp>
      </div>
      <button
        className="btn btn-ghost btn-circle mx-2 text-[1.5rem]"
        data-test-id="count-dec-btn"
        onClick={decrement}
      >
        <div className="i-carbon-subtract" />
      </button>
    </div>
  )
}

function Count() {
  const count = useAtomValue(counterAtom)
  return count
}
