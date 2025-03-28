import type { FC } from 'react'
import type { LocalComponentConfig } from 'src/types/components'
import { Image as ArcoImage } from '@arco-design/web-react'

const ImageMain: FC<{
  className?: string
  instance: LocalComponentConfig
}> = (props) => {
  return (
    <div className={`size-full ${props.className || ''}`}>
      <ArcoImage
        className="size-full"
        {...props.instance.props}
        style={props.instance.style}
      />
    </div>
  )
}

export default ImageMain
