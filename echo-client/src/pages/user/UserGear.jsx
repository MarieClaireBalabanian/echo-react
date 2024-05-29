import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserLayout from '../../layouts/UserLayout';

const UserGear = () => { 
//   const [ userData, setUserData]  = useState({});
//   const { username } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:8080/user/get-user-data?username=${username}`)
//       .then(result => {
//           return result.json()
//         }
//       )
//       .then(data => {
//         setUserData(prevState => ({
//           ...prevState,
//           ...data.userData
//         }));
//       })
//       .catch(error => {
//         console.log(error)
//       });
//   }, [username]); 

  return (
    <UserLayout>
      <h1>My Gear</h1>
    </UserLayout>
  )
} 

export default UserGear;