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

export const getUserGearItems = async (id) => {
  try {
    const response = await fetch(`${echo_api}/gear/${id}`);
    const gear = await response.json();
    return { response, gear };
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserGearItem = async (gearId) => {
  try {
    const response = await fetch(`${echo_api}/gear/${gearId}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return { response, json };
  } catch (error) {
    console.log(error);
  }
};
