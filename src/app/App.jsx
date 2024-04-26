import { RouterProvider } from "react-router-dom"
import routes from "./providers/router/routes"

import './globals.css'

function App() {
  
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App;