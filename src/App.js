import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RecoveryPassword from "./pages/RecoveryPassword";

function App() {
   return (
      <Routes>
         {/* <Route path="/" element={<Home />}></Route> */}
         <Route path="/" element={<Login />}></Route>
         <Route path="/signUp" element={<SignUp />}></Route>
         <Route path="/recoveryPassword" element={<RecoveryPassword />}></Route>
      </Routes>
   );
}

export default App;
