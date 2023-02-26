import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library/Library";
import Feed from "../Feed/Feed";
import Favorities from "../Favourites/Favorities";
import Trending from "../Trending/Trending";
import Player from "../Player/Player";
import "./Home.css";
import Sidebar from "../../Component/Sidebar";
import Login from "../auth/Login";
import { setClientToken } from "../../spotify";

const Home = () => {
  // to save the token for user we will use state and store in local hoste
  const [token, setToken] = useState("");

  // use effect to get hash value from searech bar(window)
  useEffect(() => {
    // we dont want  to hash unnecessary
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash="";
    console.log('this is token');
    console.log(hash);
    // console.log('this is token split');
    // console.log(hash.split('&')[0]);
    if (!token && hash) 
    {
        // 
       

        
        const _token=hash.split("&")[0].split("=")[1];
        
        window.localStorage.setItem("token",_token);
        setToken(_token);
        // setting token of client for api calls
        setClientToken(_token);
    }
    else{
        setToken(token);
        // set old token if we already have one
        setClientToken(token);
    }  
    // we want to split the token on based on & and further to get the real token
  }, []);
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/Player" element={<Player />} />
          <Route path="/favorities" element={<Favorities />} />
        </Routes>
      </div>
    </Router>

    // <div>
    //   this is home page
    // </div>
  );
};

export default Home;
