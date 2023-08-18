import React, { useContext } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from './App'
import axios from 'axios'
import { useEffect, useState } from "react";


function Myposts() {
    const user = useContext(userContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getposts')
            .then(posts => {
                setPosts(posts.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='posts_container'>
            {

                posts.map(post => (

                    < div >

                        {
                            user.email === post.email ?
                                <>

                                    <Link to={`/post/${post._id}`} className='post'>

                                        <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
                                        <div className='post_text'>
                                            <h2>{post.title}</h2>
                                            <p>{post.description.substring(0, 100) + "..."} </p>

                                            <p> Read More </p>
                                        </div>

                                    </Link>
                                </> :
                                <></>

                        }
                    </div>
                ))
            }
        </div >
    )
}

export default Myposts