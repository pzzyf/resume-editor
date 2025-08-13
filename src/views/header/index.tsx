import { Left } from './components/left'
import { Right } from './components/right'

export function Header() {
  return (
    <div className="w-full h-[50px] flex items-center justify-between px-4 border border-solid border-gray-400">
      <Left />
      <Right />
    </div>
  )
}
