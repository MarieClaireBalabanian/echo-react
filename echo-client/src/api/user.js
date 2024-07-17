const echo_api = import.meta.env.VITE_API_URL;

export const loginUser = async (formData) => {
  try {
    const response = await fetch(`${echo_api}/users/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    return { response, json };
  } catch (error) {
    console.log(error);
  }
};

export const verifyUserToken = async (token) => {
  try {
    const response = await fetch(`${echo_api}/users/token`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });
    const json = await response.json();
    return { response, json };
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`${echo_api}/users/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (id, formData) => {
  try {
    const response = await fetch(`${echo_api}/users/${id}`, {
      method: "patch",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const user = await response.json();
    return { response, user };
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${echo_api}/users/${id}`, {
      method: "delete",
    });
    const deleteStatus = await response.json();
    return { deleteStatus };
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (formData) => {
  try {
    const response = await fetch(`${echo_api}/users`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    return { response, json };
  } catch (error) {
    console.log(error);
  }
};
