import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Library from './Library'
import Feed from './Feed';
import Favorities from './Favorities';
import Trending from './Trending';
import Player from './Player';
const Home = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Library/>}/>
            <Route path ="/feed" element={<Feed/>}/>
            <Route path="/trending" element ={<Trending/>}/>
            <Route path ="/Player" element={<Player/>}/>
            <Route path ="/favorities" element={<Favorities/>}/>
        </Routes>
    </Router>
    </>
    // <div>
    //   this is home page
    // </div>
  )
}

export default Home
