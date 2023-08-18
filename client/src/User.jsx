import axios from "axios";
import React, { useContext, useState } from "react";
import './style.css'
import image1 from './assets/atal.jpg';
import { userContext } from './App'
import { Link, useNavigate } from 'react-router-dom'


const User = () => {
    const user = useContext(userContext)
    const profileInfo = {
        profilePic: 'profile.jpg', // Replace with the path to your profile picture
        username: user.username,
        email: user.email,
        posts: 42,
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <img src={image1} alt="Profile" className="profile-pic" />
                <h2>{profileInfo.username}</h2>
                <p>Email: {profileInfo.email}</p>
                <p>Posts: <Link to="/user/myposts"> Click Here To See Your Posts</Link></p>
            </div>
        </div>
    );
}

export default User;
