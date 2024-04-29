import { RouterProvider } from "react-router-dom"
import routes from "./providers/router/routes"

import './globals.css'
import Headline1 from "../shared/ui/ui-header/ui-typography/ui-typography";

function App() {
  
  return (
    <div>
      <RouterProvider router={routes} />
      <Headline1 variant="h1">Sasori</Headline1>
      
    </div>
  )
}

export default App;