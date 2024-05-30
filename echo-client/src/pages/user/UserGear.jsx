import UserLayout from '../../layouts/UserLayout';

const UserGear = () => { 
//   const [ userData, setUserData]  = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:8080/users/.....`)
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