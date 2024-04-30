import { Route, Routes } from "react-router-dom";
import MainPage from "../../../pages/MainPage";
import Autorization from "../../../pages/Autorization";

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={MainPage} />
      <Route path="/autorization" element={Autorization} />
    </Routes>
  )
}
export default Routes;