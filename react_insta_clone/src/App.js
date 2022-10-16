import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";

import Navbar from './components/navbar';
import UserList from './components/recordList';
import Edit from './components/edit';
import Create from './components/create';

function App() {
  return (
    // <div className="container">
    //   <nav>
    //     <p>Instagram Clone</p>
    //     <p><img src="./home-outline.png" alt="home"></img></p>
    //     <p><img src="./message-circle-outline.png" alt="search"></img></p>
    //     <p><img src="./search-outline.png" alt="messages"></img></p>
    //   </nav>
    //   <div className="form">
    //   </div>
    // </div>
    <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<UserList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
  );
}

export default App;