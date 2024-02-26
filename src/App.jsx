import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Enter from "./Enter.jsx";
// import Login from "./Login.Jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Roger from "./Roger.jsx";
import About from "./About.jsx";
import DashBoard from "./DashBoard.jsx";
import MiniVarient from "./dash/MiniVarient.jsx";
import Setting from "./dash/Setting.jsx";
import { Home } from "@mui/icons-material";

// import Read from "./Read.jsx";
const Read = lazy(()=> import( "./Read.jsx"))

const App = () => {

  return (
    <>
  <Routes>
    {/*  */}
    <Route path="/" element={<MiniVarient/>}>
    <Route path="/setting" element={<Setting/>}/>
    <Route path="/home" element={<Home/>}/>
    </Route>
    


    {/*  */}
  <Route   path="/dash" element={<DashBoard/>}/>
  <Route   element={<ProtectedRoute/>}>
  
  <Route path="/enter"  element={<Enter/>}/>
  <Route path="/enter/next"  element={<Roger/>}/>
  </Route>
 <Route path="/about" element={<About/>}/>
  <Route path="/rr" element={<Roger/>}/>
  <Route path="/r" element={<Read/>}/>

  <Route path="*" element={<div>404 not found</div>} />
</Routes>

    </>
  );
};

export default App;



