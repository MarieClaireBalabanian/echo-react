import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [view, setView] = useState("login");
  const isLoggedIn = useSelector((state) => state.auth);
  return (
    <>
      <img
        className="absolute-cover"
        src="/music.jpg"
      />
      
      <div className="container">
        { isLoggedIn ?  <h1>Do not miss out</h1>
        : (
            <section className="centered-form">
              {view === "login" ? <LoginForm /> : <SignUpForm />}
              <div className="form-switcher">
                <p>{view === "login" ? "Not a member?" : "Already a member?"}</p>
                <button
                  onClick={() => {
                    {
                      view === "login" ? setView("signup") : setView("login");
                    }
                  }}>
                  Log In
                </button>
              </div>
            </section>
          )
        }
      </div>
    </>
  );
};
export default Home;
