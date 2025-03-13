import React, { useMemo } from 'react'
import { components } from '@/utils/loader'

function Left() {
  const controls = useMemo(() => components.map(item => item.module.control), [])
  return (
    <div className="flex items-center">
      {
        controls.map((item, index) => {
          return (
            <div
              className="
                ml-[10px]
                flex
                size-[23px]
                cursor-pointer
                items-center
                justify-center
                p-[3px]
                text-[18px]
                hover:bg-gray-200
                "
              key={index}
            >
              {item.icon}
            </div>
          )
        })
      }
    </div>
  )
}

export { Left }
