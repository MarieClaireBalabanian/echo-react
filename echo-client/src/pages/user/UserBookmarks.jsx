import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserBookmarks } from "../../features/gear/gearSlice";
// import { getUserBookmarksItems } from "../../api/gear";

const UserBookmarks = () => {
  // const userId = useSelector((state) => state.user.id);
  // const gearList = useSelector((state) => state.gear);
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   const fetchUserBookmarks = async () => {
  //     try {
  //       const res = await getUserBookmarksItems(userId);
  //       dispatch(setUserBookmarks(res.gear));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUserBookmarks();
  // }, [dispatch, userId]);

  return (
    <div>
      <h1 className="h1">My Bookmarks</h1>
    </div>
  );
};

export default UserBookmarks;
