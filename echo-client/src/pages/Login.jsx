import LoginForm from "../components/forms/LoginForm";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="container">
        <section className="centered-form">
          <LoginForm />
          <div className="form-switcher">
            <p>Not a member?</p>
            <Link className="button orange" to="/signup">
              Join
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login;
