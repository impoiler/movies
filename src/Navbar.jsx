import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

  const [menushow, setmenushow] = useState(false)

  return (
    <>
      <div className="navbar container">
        <div className="logo">
          <Link to='/'><span ><span>SB</span> Movies</span></Link>
        </div>
        <ul className="menu hideonmobile">
          <Link to='/'><li>Home</li></Link>
          <Link to='/top-rated'><li>Top Rated</li></Link>
          <Link to='/upcoming'><li>Upcoming</li></Link>
        </ul>

        <div onClick={() => { setmenushow(true) }} className="menu hideonbigd">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z" fill="black" />
            <path d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z" fill="black" />
            <path d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z" fill="black" />
          </svg>
        </div>

        {
          menushow ? <ul className="menu mobilemenu">
            <div className="flex flxspbtwn">
              <div className="logo">
                <Link to='/'><span ><span>SB</span> Movies</span></Link>
              </div>
              <div onClick={() => { setmenushow(false) }} className="close">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5213 0.833252L8.99968 7.35492L2.47801 0.833252L0.833008 2.47825L7.35468 8.99992L0.833008 15.5216L2.47801 17.1666L8.99968 10.6449L15.5213 17.1666L17.1663 15.5216L10.6447 8.99992L17.1663 2.47825L15.5213 0.833252Z" fill="black" />
                </svg>


              </div>
            </div>
            <Link to='/'><li>Home</li></Link>
            <Link to='/top-rated'><li>Top Rated</li></Link>
            <Link to='/upcoming'><li>Upcoming</li></Link>
          </ul> : null
        }


      </div>
    </>
  )
}

export default Navbar
