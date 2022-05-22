import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* the above route can be accessed by all only if they are not logged in */}
          <Route path="/user/*" element={<PrivateRoute />} />
          {/* The Private routes for users logged in */}
          <Route path="/" exact element={<Home />} />
          {/* Home route is for the landing page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
