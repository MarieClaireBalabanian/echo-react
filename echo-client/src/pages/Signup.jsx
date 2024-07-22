import SignUpForm from "../components/forms/SignUpForm";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="container">
        <section className="centered-form">
          <SignUpForm />
          <div className="form-switcher">
            <p>Already a member?</p>
            <Link className="button yellow" to="/login">
              Log In
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
export default Signup;
