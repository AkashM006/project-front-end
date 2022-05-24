const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.user };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export default userReducer;
