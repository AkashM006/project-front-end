import { Routes, Route, useNavigate } from "react-router-dom";
import BookCall from "../BookCall/BookCall";
import CallStatus from "../CallStatus/CallStatus";
import CallAssign from "../CallAssign/CallAssign";
import UserRegistration from "../UserRegistration/UserRegistration";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Logout from "../Logout/Logout";

export default function PrivateRoute() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
    console.log("User", user);
  }, [navigate, user]);

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
        <Route path="logout" element={<Logout />} />
      </Routes>
    </>
  );
}
