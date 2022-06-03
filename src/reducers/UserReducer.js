import makeRequest from "../http";
import constants from "../constants";
const userReducer = async (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      try {
        const result = await makeRequest({
          method: "POST",
          url: constants.url + "/login",
          data: action.payload.user,
        });
        console.log("Results: ", result.response.data);
      } catch (err) {
        console.log(err.response.data);
        return state;
      }
      return { user: action.payload.user };
    case "REGISTER":
      try {
        const result = await makeRequest({
          method: "POST",
          url: constants.url + "/register",
          data: action.payload.user,
        });
        console.log("Result: ", result.data);
        const resultData = result.data;
        if (!resultData.success) return { ...state, msg: resultData.msg };
        // const data =
      } catch (err) {
        console.log(err);
        return state;
      }
      break;
    case "LOGOUT":
      return { user: null };
      break;
    default:
      return state;
  }
};

export default userReducer;
