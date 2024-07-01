import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';

function Edit() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        image: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        localStorage.setItem('userData', JSON.stringify(formData));
        console.log('Form data submitted:', formData);
        navigate('/profile');   
    };

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="text-primary text-center">
                            <h3>Edit Profile</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex justify-content-between">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            placeholder='Enter Your First Name'
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            placeholder='Enter Your Last Name'
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        placeholder='Enter Your Email'
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        placeholder='Enter Your Password'
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        placeholder='Enter Your Confirm Password'
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        placeholder='Enter Your Phone Number'
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Image URL</label>
                                    <input
                                        placeholder='Enter Your Profile Image URL'
                                        type="text"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-flex gap-5">
                                    <button type="submit" className="btn btn-outline-primary btn-block mt-3">Save Profile</button>
                                    <Link to='/profile'>
                                        <button type="submit" className="btn btn-outline-danger btn-block mt-3">Cancel</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
