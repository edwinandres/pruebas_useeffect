import React, { useEffect, useState, useCallback } from 'react'
import getUser from './helpers/getUser'
import getPost from './helpers/getPost'

// const initialUser = {
//     name: 'Luis',
//     email: 'luis@example.com',
//     password: '',
//     passwordConfirmation: ''
// }

// const initialPost = [
//     {id: 1, title: 'Post 1'},
//     {id: 2, title: 'Post 2'},
// ]

const FetchCard = () => {

    const [user, setUser] = useState({});
    const [post, setPost] = useState([])


    const updateUser = (e) => {
        getUser().then(user => {
            setUser(user);
        });
    }

    const updatePost = useCallback(() => {
        getPost(user.id).then(post => {
            setPost(post);
        });
    },[user])


    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        user?.id && updatePost();       
    }, [user]);



    return (
        <div>
            <h1>FetchCard</h1>
            <button onClick={updateUser}>Another user</button>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <br/>
            <h2>Post - user: {user.id}</h2>
            <ul>
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>            
        </div>
    )
}

export default FetchCard
