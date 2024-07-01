import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaInbox } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { IoHelpBuoy } from "react-icons/io5";
import '../App.css'

export default function Header() {
  return (
    <>
      <nav className=' d-flex align-items-center justify-content-between bg-white '>
        <Link to='/products' className="shopper text-decoration-none text-dark d-flex align-items-center w-25 gap-2">
          <div className="image">
            <img src="https://enchanting-bunny-b0d093.netlify.app/logo_big.png" alt="" />
          </div>
          <div className="text">
            <h1 style={{ fontSize: '35px' }}>SHOPPER</h1>
          </div>
        </Link>

        <div className="designer d-flex align-items-center gap-2">
          <div className="img">
            <img src="/logodesigner.png" alt="" />
          </div>
          <div className="designer-text">
            <h5>Shukurullo G'anisherov</h5>
            <p>Front_end Developer</p>
          </div>
          <div className="designer-div ">
            <Link className='text-decoration-none' to='/profile'>
              <h5 className='d-flex align-items-center justify-content-between text-secondary'><FaUserCircle /> My Profile</h5>
            </Link>
            <Link className='text-decoration-none' to='/edit'>
              <h5 className='d-flex align-items-center justify-content-between text-secondary'><CiEdit /> Edit Profile</h5>
            </Link>
            <Link className='text-decoration-none' to='/inbox'>
              <h5 className='d-flex align-items-center justify-content-evenly text-secondary'><FaInbox /> Inbox</h5>
            </Link>
            <Link className='text-decoration-none' to='/setting'>
              <h5 className='d-flex align-items-center justify-content-evenly text-secondary'><IoHelpBuoy /> Help</h5>
            </Link>
            <hr />
            <Link className='text-decoration-none' to='/'>
              <h5 className='d-flex align-items-center justify-content-between text-secondary'><CiLogin /> Sign Out</h5>
            </Link>
          </div>
        </div>

      </nav>
    </>
  )
}
