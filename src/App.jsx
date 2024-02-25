import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Enter from "./Enter.jsx";
// import Login from "./Login.Jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Roger from "./Roger.jsx";
import About from "./About.jsx";
// import Read from "./Read.jsx";
const Read = lazy(()=> import( "./Read.jsx"))

const App = () => {

  return (
    <>
  <Routes>
  <Route   element={<ProtectedRoute/>}>
  <Route path="/enter"  element={<Enter/>}/>
  <Route path="/enter/next"  element={<Roger/>}/>
  </Route>
 <Route path="/about" element={<About/>}/>
  <Route path="/" element={<Roger/>}/>
  <Route path="/r" element={<Read/>}/>

  <Route path="*" element={<div>404 not found</div>} />
</Routes>

    </>
  );
};

export default App;



