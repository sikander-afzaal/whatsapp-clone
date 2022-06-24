export const initialState = {
  user: "",
};

export const actionTypes = {
  // action types
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  //reducer
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return { ...state };
  }
};

export default reducer;
