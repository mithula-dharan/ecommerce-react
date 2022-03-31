import React,{useState} from 'react';
import '../App.css';
import bootstrap from 'bootstrap';


function Navbar() {
// const [showLinks,setShowLinks]=useState(false);
  return (
   
      <div className='Navbar'>
        <div className='leftside'>
          <div className='links'>
            <a href='/home'>Home</a>
            <a href='/contact'>Contact</a>
          </div>
          {/* <button>open</button> */}
        </div>
        <div className='rightside'>
         
            <input type='text' placeholder='Search..'/>
            <button className='btn1 btn-primary'> search</button>

        </div>
        
      </div>
 
  );
}

export default Navbar;
