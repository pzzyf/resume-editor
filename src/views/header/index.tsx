import { Left } from './components/left'
import { Right } from './components/right'

const Header: React.FC<{ exportPDF: () => void }> = (props) => {
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
      <Right exportPDF={props.exportPDF} />
    </div>
  )
}

export { Header }
