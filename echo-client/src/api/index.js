export const createUser = async (user) => {
    try {
        const response = await fetch('http://localhost:8080/api/users/signup/', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        });
        return response ;
    } catch (err) {
      console.log(`Error: `);
      throw err;
    }
  };
  