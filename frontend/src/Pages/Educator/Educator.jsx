  import React from 'react'
  import { Outlet } from 'react-router-dom';
  import { Link } from "react-router-dom";
  import Navbar from '../../Components/Educator/navbar';
  const Educator = () => {
    return (
      <div>
      <Navbar/>
        <div>
          {<Outlet/>}
        </div>
      </div>
    )
  }

  export default Educator;
