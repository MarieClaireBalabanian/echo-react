import MyGearList from '../../components/user/MyGearList'
import AddGearForm from '../../components/forms/AddGearForm';

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
    <div>
      <h1>My Gear</h1>
      <MyGearList />
      <AddGearForm />
    </div>
  )
} 

export default UserGear;