import { Routes, Route, useNavigate } from "react-router-dom";
import BookCall from "../BookCall/BookCall";
import CallStatus from "../CallStatus/CallStatus";
import CallAssign from "../CallAssign/CallAssign";
import UserRegistration from "../UserRegistration/UserRegistration";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import server from "../../constants";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      axios
        .get(`${server}`, { headers: { Authorization: user.token } })
        .then((res) => {
          console.log("Response: ", res.status);
        })
        .catch(async (err) => {
          console.log("Error: ", err);
          if (err.response.status === 401) dispatch(logout());
        });
    }
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        {/* home is the landing page, it must show if logged in or not */}
        <Route path="book" element={<BookCall />} />
        {/* booking call must be available for all but must only render if logged in */}
        <Route path="calls" element={<CallStatus />} />
        {/* this is available from all the users, but must be logged in */}
        <Route path="assign" element={<CallAssign />} />
        {/* the above route must be available only for admin */}
        <Route path="createuser" element={<UserRegistration />} />
        {/* the above route must be available only for admin, for creating new admins or engineers */}
      </Routes>
    </>
  );
}
