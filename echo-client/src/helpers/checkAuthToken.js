const checkAuthToken = () => {
  const token = localStorage.getItem("token");
  return !token ? false : token;
};

const setAuthToken = (token) => {
  localStorage.setItem("token", token);
};

export default { checkAuthToken, setAuthToken };
