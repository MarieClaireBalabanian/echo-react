import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setCategories } from "./features/categories/categoriesSlice";

import Home from "./pages/Home"
import UserProfile from "./pages/user/UserProfile"
import UserGear from "./pages/user/UserGear"
import UserLayout from "./layouts/UserLayout"
import Header from "./components/global/Header"
import Footer from "./components/global/Footer"
import ScrollToTop from "./utilities/scrollToTop"

import "./index.css"

function App() {
  const echo_api = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${echo_api}/categories`);
      const categories = await response.json();
      dispatch(setCategories(categories))
    }
    catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <div className="page">
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:username" element={<UserLayout />}>
                <Route index element={<UserProfile />} />
                <Route path="mygear" element={<UserGear />} />
              </Route>
          </Routes>
        </main>
      </div>
       <Footer />
    </div>
  );
}

export default App
