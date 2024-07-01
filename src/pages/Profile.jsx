import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { MdGetApp } from "react-icons/md";

export default function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [imageURL, setImage] = useState('');

  // Fetch user data from localStorage
  if (!username && !email && !password && !phone && !imageURL) {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      setUsername(`${storedData.firstName} ${storedData.lastName}`);
      setEmail(storedData.email);
      setPassword(storedData.password);
      setPhone(storedData.phone);
      setImage(storedData.image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png');
    }
  }

  const handleUpload = () => {
    document.querySelector('.profile-upload-img').style.display = 'block';
  };

  const handleChangeImg = () => {
    const input = document.querySelector('input[type="text"]');
    if (input) {
      setImage(input.value);
      const storedData = JSON.parse(localStorage.getItem('userData'));
      if (storedData) {
        storedData.image = input.value; // Yangi rasm URLsini saqlash
        localStorage.setItem('userData', JSON.stringify(storedData)); // localStorage ga yangi ma'lumotni saqlash
      }
      input.value = '';
      document.querySelector('.profile-upload-img').style.display = 'none';
    }
  };
  

  const handleChangeImgCancel = () => {
    document.querySelector('.profile-upload-img').style.display = 'none';
  };

  return (
    <div className="Profile position-relative">
      <h1>Profile</h1>
      <div className="profile-img" style={{ backgroundImage: `url(${imageURL})` }}>
        <button className='btn text-white' style={{ backgroundColor: 'rgb(0, 255, 0)' }} onClick={handleUpload}><MdGetApp /></button>
      </div>
      <div style={{ width: '400px' }}>
        <p><b>Username:</b> {username}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Password:</b> {password}</p>
        <p><b>Phone:</b> {phone}</p>
        <Link to='/edit'>
          <button className='w-100 btn btn-primary'>Edit Profile</button>
        </Link>
        <div className="profile-upload-img" style={{ display: 'none' }}>
          <input type="text" style={{ position: 'absolute', right: '0' }} placeholder='Enter Img URL' className='position-absolute top-0 form-control w-25 mt-3' />
          <button onClick={handleChangeImg} className='btn btn-outline-success position-absolute' style={{ right: '0', top: '60px' }}>Save</button>
          <button onClick={handleChangeImgCancel} className='btn btn-outline-danger position-absolute' style={{ right: '70px', top: '60px' }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
