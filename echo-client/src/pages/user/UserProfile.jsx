import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../../features/user/userSlice";
import { getUser } from "../../api/user"


const UserProfile = () => { 
  const { username } = useParams();
  const userProfile = useSelector(state => state.user)
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const user = await getUser(username);
      dispatch(setUserProfile(user))
    } catch (error) {
      console.log(error);
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