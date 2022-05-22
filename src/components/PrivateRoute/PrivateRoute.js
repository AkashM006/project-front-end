import { Routes, Route, useNavigate } from "react-router-dom";
import BookCall from "../BookCall/BookCall";
import CallStatus from "../CallStatus/CallStatus";
import CallAssign from "../CallAssign/CallAssign";
import UserRegistration from "../UserRegistration/UserRegistration";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";

export default function PrivateRoute() {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  // useEffect(() => {
  //   if (!user || Object.keys(user).length === 0) navigate("/login");
  // }, []); // to check if the user exists
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
