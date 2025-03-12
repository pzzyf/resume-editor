import React, { useMemo } from 'react'
import { components } from '@/utils/loader'

function Left() {
  const controls = useMemo(() => components.map(item => item.module.control), [])
  return (
    <div className="flex items-center">
      {
        controls.map((item, index) => {
          return (
            <div key={index}>{item.icon}</div>
          )
        })
      }
    </div>
  )
}

export { Left }
