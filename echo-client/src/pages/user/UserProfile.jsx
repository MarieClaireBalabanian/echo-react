import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../../features/user/userSlice";


const UserProfile = () => { 
  const echo_api = import.meta.env.VITE_API_URL;

  const { username } = useParams();
  const userProfile = useSelector(state => state.user)
  const dispatch = useDispatch();


  const fetchUser = async () => {
    try {
      const response = await fetch(`${echo_api}/users/${username}`);
      const user = await response.json();
      dispatch(setUserProfile(user))
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (!userProfile) {
      fetchUser()
    }
  }, []); 

  return (
    <div>
      { userProfile ?
        <h1>Welcome { userProfile.username }</h1>
        : 
        <h1>Loading Profile</h1>
      }    
    </div>
  )
} 

export default UserProfile;