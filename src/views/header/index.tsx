import { Left } from './components/left'
import { Right } from './components/right'

function Header() {
  return (
    <div className="
      box-border
      flex
      h-[50px]
      items-center
      justify-between
      border-b
      bg-white
      px-[10px]"
    >
      <Left />
      <Right />
    </div>
  )
}
export { Header }
