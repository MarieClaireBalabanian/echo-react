import { useEffect, useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';


const Home = () => { 
  return (
    <div className="page">
      <SignUpForm />
      <LoginForm />
    </div>
  )
} 
export default Home;