import React, { lazy, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Enter from './Enter';

const ProtectedRoute = ( {Comp} ) => {
    console.log(Comp,"here getting componnets")
    // const {Component} = props;
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.token);
  console.log(loggedIn,"in logeddddddidnddndndn")
  
  useEffect(() => {
    if (!loggedIn) {
      
      navigate('/');
    }
  },[]);

  console.log(loggedIn, 'Authentication state');
  
  return (
    <>
      {loggedIn ? <Outlet /> : null}
     {/* {
        loggedIn?(<Outlet/>):(navigate("/"))
     } */}
    </>
  );
};

export default ProtectedRoute;
