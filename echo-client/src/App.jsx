import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import UserProfile from "./pages/user/UserProfile"
import UserGear from "./pages/user/UserGear"
import Admin from "./pages/admin/Admin"

import Header from "./components/global/Header"
import ScrollToTop from "./utilities/scrollToTop"
import "./index.css"

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <div className="page">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<UserProfile />} />
            <Route path="/user/:username/mygear" element={<UserGear />} />

            {/* will eventually deal with admin role creation and admin route protection */}
            <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
       <footer className="App-footer">
          FOOTER
      </footer>
    </div>
  );
}

export default App
