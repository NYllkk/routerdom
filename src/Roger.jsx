// import React from 'react'

// const Roger = () => {
//   return (
//     <div>Roger</div>
//   )
// }

// export default Roger
// 
import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
const  Roger = ()=> {
    const naviagte = useNavigate()
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch()
const [token,settoken] = useState()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
// console.log(token,"from state ")
  const handleSubmit = async(e) => {
    e.preventDefault(); 
  
    await dispatch(fetchData(data));
    

  
    console.log("Submitting:", data);
    
    
    
    naviagte("/enter")

    

  };

  return (
    <>
    <Link to={"/enter"}><button>click</button></Link>
      <form onSubmit={handleSubmit}>
      0lelplR
      <p>kminchelle</p>
        <TextField id='username' value={data.username} name='username' onChange={handleChange} />
        <TextField id='password' value={data.password} name='password' onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Roger
