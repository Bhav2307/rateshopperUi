import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './component/signIn/SignIn';
import ResetPassword from './component/resetPassword/ResetPassword';
import ResetPasswordTwo from './component/resetPasswordTwo/ResetPasswordTwo';
import SideBar from './component/sideBar/SideBar';
import Header from './component/header/Header';
import HederStrip from './component/header/HederStrip';
import Ranking from './component/ranking/Ranking';
import TripleLineChart from './component/line/TripleLineChart';
import StackChart from './component/stack/StackChart'
import MainComp from './component/main/MainComp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ResetPasswordTwo" element={<ResetPasswordTwo />} />
        <Route path="/SideBar" element={<SideBar />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/HederStrip" element={<HederStrip />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/TripleLineChart" element={<TripleLineChart />} />
        <Route path="/StackChart" element={<StackChart />} />
        <Route path="/MainComp" element={<MainComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
