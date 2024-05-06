import { RouterProvider } from "react-router-dom"
import routes from "./providers/router/routes"
import UiNotification from "../shared/ui/ui-notification/ui-notification"

import './globals.css'
import Headline1 from "../shared/ui/ui-header/ui-typography/ui-typography";

function App() {
  
  return (
    <div>
      <RouterProvider router={routes} />
      <Headline1 variant="h1">Sasori</Headline1>
      <UiNotification/>
    </div>
    
  )
}

export default App;