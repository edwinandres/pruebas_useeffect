// const getUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         name: "Juan",
//         lastname: "Perez"
//       });
//     }, 1000);
//   });
// }

const getUser = async () => {
    const userId = parseInt(Math.random()*10)+1;    
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const res = await fetch(url);
    const user = await res.json();
    return user;
}

export default getUser
