const reducer = (state = null, action) => {
  //   const userObject = action?.payload.user;
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.user };
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

export default reducer;
