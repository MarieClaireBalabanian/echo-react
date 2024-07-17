import { useSelector } from "react-redux";

const UserProfile = () => {
  const userProfile = useSelector((state) => state.user);

  return (
    <div>{userProfile ? <h1>Welcome {userProfile.username}</h1> : <h1>Loading Profile</h1>}</div>
  );
};

export default UserProfile;
