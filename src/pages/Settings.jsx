import React from 'react'
import '../App.css'

export default function Settings() {
  const handleCheck = () => {
    const background = document.getElementById('background').value;
    document.body.style.backgroundColor = background;
  }
  return (
    <>
      <div className="Settings">
        <h1 className='text-danger text-center'>Settings</h1>
        <div className="main h-100 position-relative">
          <div className="setting w-100 h-75">
            <label htmlFor="background" className='w-100'><h3 className='w-100'>Web Site's background color</h3></label>
            <input type="color" className='w-100 h-100' name='background' id='background' />
          </div>
          <button className='btn btn-primary fs-1 position-absolute' style={{ position: 'absolute', bottom: '75px' }} onClick={handleCheck}>Change Background</button>
        </div>
      </div>
    </>
  )
}
