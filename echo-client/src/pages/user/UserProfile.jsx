import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { setUserProfile } from "../../features/user/userSlice";
import UserLayout from '../../layouts/UserLayout';


const UserProfile = () => { 
  const { username } = useParams();
  const userProfile = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/get-user-data?username=${username}`)
      .then(result => {
          return result.json()
        }
      )
      .then(data => {
        dispatch(setUserProfile(data.userData))
        console.log(data.userData)
      })
  }, [dispatch, username]); 

  return (
    <UserLayout>
      { 
      userProfile && <h1>Welcome { userProfile.username }</h1>
      }
      
    </UserLayout>
  )
} 

export default UserProfile;