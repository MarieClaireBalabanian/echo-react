const echo_api = import.meta.env.VITE_API_URL;

export const createUserGearItem = async (formData, userId) => {
  try {
    const response = await fetch(`${echo_api}/gear/${userId}`, {
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

export const getUserGearItems = async (userId) => {
  try {
    const response = await fetch(`${echo_api}/gear/${userId}`);
    const gear = await response.json();
    return { response, gear };
  } catch (error) {
    console.log(error);
  }
};


export const editiUserGearItem = async (userId, gearId) => {
  try {
    const response = await fetch(`${echo_api}/gear/${userId}/${gearId}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return { response, json };
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserGearItem = async (userId, gearId) => {
  try {
    const response = await fetch(`${echo_api}/gear/${userId}/${gearId}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return { response, json };
  } catch (error) {
    console.log(error);
  }
};


export const getAllGearItems = async (userId) => {
  try {
    let url = `${echo_api}/gear`;
    if (userId) url +=  `?exclude=${userId}`
    const response = await fetch(url);
    const json = await response.json();
    return { response, json };
  } catch (error) {
    console.log(error);
  }
};
