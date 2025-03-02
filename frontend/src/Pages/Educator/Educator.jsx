  import React from 'react'
  import { Outlet } from 'react-router-dom';
  import { Link } from "react-router-dom";
  import Navbar from '../../Components/Educator/navbar';
  import Sidebar from '../../Components/Educator/Sidebar';
  const Educator = () => {
    return (
      <div>
      <Navbar/> 
        <div className='flex'>
          <Sidebar/>
         
        </div>
        <div className='flex-1'>
          {<Outlet/>}
          </div>
      </div>
    )
  }

  export default Educator;
