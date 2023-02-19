import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Library from '../Library/Library'
import Feed from '../Feed/Feed';
import Favorities from '../Favourites/Favorities';
import Trending from '../Trending/Trending';
import Player from '../Player/Player';
import './Home.css'; 
import Sidebar from '../../Component/Sidebar';

const Home = () => {
  return (
    <Router>
      <div className = 'main-body'>
        <Sidebar />
        <Routes>
            <Route path="/" element={<Library/>}/>
            <Route path ="/feed" element={<Feed/>}/>
            <Route path="/trending" element ={<Trending/>}/>
            <Route path ="/Player" element={<Player/>}/>
            <Route path ="/favorities" element={<Favorities/>}/>
        </Routes>
      </div>
    </Router>
    
    // <div>
    //   this is home page
    // </div>
  )
}

export default Home;
