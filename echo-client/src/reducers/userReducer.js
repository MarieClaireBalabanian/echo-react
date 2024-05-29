const SET_USER_PROFILE = 'SET_USER_PROFILE';

// Initial state
const initialState = {
  userProfile: null,
};

// Reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export const setUserProfile = (profileData) => ({
    type: SET_USER_PROFILE,
    payload: profileData,
});

export default userReducer;