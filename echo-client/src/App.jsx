import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "./features/categories/categoriesSlice";
import { setUserAuthStatus } from "./features/user/authSlice";
import { setUserProfile } from "./features/user/userSlice";
import { verifyUserToken } from "./api/user";

import Home from "./pages/Home";
import UserProfile from "./pages/user/UserProfile";
import UserGear from "./pages/user/UserGear";
import UserLayout from "./layouts/UserLayout";
import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer";
import ScrollToTop from "./utilities/scrollToTop";

import "./scss/styles.scss";
import "./index.css";

function App() {
  const echo_api = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserByToken = async (token) => {
    try {
      const { response, json } = await verifyUserToken(token);
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
    if (token) fetchUserByToken(token);
    else setIsLoading(false);
    fetchCategories();
  }, []);

  return (
    <div className="App flex-column">
      <ScrollToTop />
      <Header />
      <div className="page flex-column">
        {isLoading ? (
          <h2>Loading</h2>
        ) : (
          <main>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/user/:username"
                element={isLoggedIn ? <UserLayout /> : <Home />}>
                <Route
                  index
                  element={<UserProfile />}
                />
                <Route
                  path="mygear"
                  element={<UserGear />}
                />
              </Route>
            </Routes>
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
