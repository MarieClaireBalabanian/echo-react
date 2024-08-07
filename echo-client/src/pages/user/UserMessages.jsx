// import { useDispatch, useSelector } from "react-redux";
// import { setUserMessages } from "../../features/gear/gearSlice";
// import { getUserMessagesItems } from "../../api/gear";

const UserMessages = () => {
  // const userId = useSelector((state) => state.user.id);
  // const gearList = useSelector((state) => state.gear);
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   const fetchUserMessages = async () => {
  //     try {
  //       const res = await getUserMessagesItems(userId);
  //       dispatch(setUserMessages(res.gear));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUserMessages();
  // }, [dispatch, userId]);

  return (
    <div>
      <h1 className="h1">My Messages</h1>
    </div>
  );
};

export default UserMessages;
