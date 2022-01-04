
const getPost = async (userId) => {
    console.log(`esto es userId: ${userId}`);
    const postId = parseInt(Math.random()*10)+1;    
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const res = await fetch(url);
    const user = await res.json();
    return user;
}

export default getPost
