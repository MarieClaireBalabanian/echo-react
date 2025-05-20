import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "./features/categories/categoriesSlice";
import { setUserAuthStatus } from "./features/user/authSlice";
import { setUserProfile } from "./features/user/userSlice";
import { verifyUserToken } from "./api/user";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Header from "./components/global/GlobalHeader";
import Footer from "./components/global/GlobalFooter";
import ScrollToTop from "./utilities/scrollToTop";
import UserProfile from "./pages/user/UserProfile";
import UserGear from "./pages/user/UserGear";
import UserBookmarks from "./pages/user/UserBookmarks";
import UserMessages from './pages/user/UserMessages';
import UserLayout from "./layouts/UserLayout";
import GearIndex from "./pages/gear/GearIndex";
import GearCategoriesIndex from "./pages/gear/GearCategoriesIndex";
import GearCategoryDetail from "./pages/gear/GearCategoryDetail";
import GearItemDetail from "./pages/gear/GearItemDetail";


function App() {
  const echo_api = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.user);

  const isLoggedIn = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserByToken = async (token) => {
    try {
      const { response, json} = await verifyUserToken(token);
      if (response.status === 200) {
        dispatch(setUserProfile(json));
        dispatch(setUserAuthStatus(true));
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${echo_api}/categories`);
      const categories = await response.json();
      dispatch(setCategories(categories));
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwttoken");
    if (token) fetchUserByToken(token)
    else setIsLoading(false) 
    fetchCategories();
  }, []);

  return (
    <div>
      <div id="app" className="App flex-column">
        <ScrollToTop />
        <Header />
        <div className="page flex-column">
          { isLoading ? 
            <h2>Loading</h2>
            :
            <main>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/login"
                  element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/signup"
                  element={!isLoggedIn ? <Signup /> : <Navigate to="/" />}
                />

                {/* // Gear Routes */}
                <Route
                  exact
                  path="/gear"
                  element={<GearIndex />}
                />
                <Route
                  path="/gear/:gearId"
                  element={<GearItemDetail />}
                />
                <Route
                  exact
                  path="/gear/categories"
                  element={<GearCategoriesIndex />}
                />
                <Route
                  path="/gear/categories/:categorySlug"
                  element={<GearCategoryDetail />}
                />

                {/* // User Routes */}
                <Route
                  path="/user">
                  <Route
                    index
                    element={isLoggedIn ? <Navigate to={`/user/${userProfile.username}`} /> : <Navigate to="/" />}
                  />
                  <Route
                    path=":username"
                    element={isLoggedIn ? <UserLayout /> : <Navigate to="/" />}>
                    <Route
                      index
                      element={<UserProfile />}
                    />
                    <Route
                      path="mygear"
                      element={<UserGear />}
                    />
                    <Route
                      path="bookmarks"
                      element={<UserBookmarks />}
                    />
                    <Route
                      path="messages"
                      element={<UserMessages />}
                    />
                  </Route>
                </Route>
              </Routes>
            </main>
          }
        </div>
        <Footer />
      </div>
      <div id="modal-root"></div>
    </div>
  );
}

export default App;
