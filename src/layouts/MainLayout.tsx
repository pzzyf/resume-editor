import { RouterProvider } from 'react-router'
import { router } from '../router'

export function MainLayout() {
  return (
    <div className="flex flex-col items-center justify-center">
      <RouterProvider router={router} />
    </div>
  )
}
