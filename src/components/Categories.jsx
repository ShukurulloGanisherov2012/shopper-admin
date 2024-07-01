import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillProduct } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaInbox } from "react-icons/fa";
import '../App.css'

export default function Categories() {
  return (
    <>
      <div className="box">
        <Link className='text-decoration-none' to='/products'>
          <div className="box-card">
            <h5><AiFillProduct className='icon position-absolute' /> <b className='txt mx-5 '>All Products</b></h5>
          </div>
        </Link>
        <Link className='text-decoration-none' to='/addproducts'>
          <div className="box-card">
            <h5><IoBagAdd className='icon position-absolute' /> <b className='txt mx-5'>Add Products</b></h5>
          </div>
        </Link>
        <Link className='text-decoration-none' to='/inbox'>
          <div className="box-card">
            <h5 className='d-flex justify-content-between w-100 align-items-center'><div className='d-flex align-items-center'><FaInbox className='icon position-absolute' /> <b className='txt mx-5'>Inbox</b></div>  <div style={{ marginTop: '10px' }}><h6 className='bg-secondary text-white d-flex align-items-center justify-content-center' style={{ width: '20px', height: '20px', borderRadius: '50%' }}>6</h6></div></h5>
          </div>
        </Link>
        <Link className='text-decoration-none' to='/profile'>
          <div className="box-card">
            <h5><BiSolidUserRectangle className='icon position-absolute' /> <b className='txt mx-5'>Profile</b></h5>
          </div>
        </Link>

        <Link className='text-decoration-none' to='/setting'>
          <div className="box-card">
            <h5><IoIosSettings className='icon position-absolute' /> <b className='txt mx-5'>Settings</b></h5>
          </div>
        </Link>
        <Link className='text-decoration-none' to='/'>
          <div className="box-card2">
            <h5 className=' text-danger-subtitle'><FaPowerOff className='icon position-absolute fs-3' /> <b className='txt mx-5'>Log Out</b></h5>
          </div>
        </Link>
      </div>
    </>
  )
}
