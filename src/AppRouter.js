import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import Fluctuation from "./pages/Fluctuation/Fluctuations";
import ParityCheck from "./pages/parityCheck/ParityCheck";
import Visibility from "./pages/Visibility/Visibility";
function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/ParityCheck" element={<ParityCheck />} />
          <Route path="/fluctuations" element={<Fluctuation />} />
          <Route path="/visiblity" element={<Visibility />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
