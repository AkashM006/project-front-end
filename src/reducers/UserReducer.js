const reducer = (state = null, action) => {
  //   const userObject = action?.payload.user;
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.user };
    case "LOGOUT":
      return null;
    case "REGISTER":
      const userObject = action.payload.user;
      const user = { name: userObject.name, email: userObject.email, type: 1 };
      return { user };
    default:
      return state;
  }
};

export default reducer;
