import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import * as IoIcons from "react-icons/io";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const user = useSelector((state) => state.user);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text" style={{ color: 'white' }}>
              <Link to='/user/profile'>
                <IoIcons.IoMdPerson />
                <span>{user.name}</span>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (user && item.allowedTypes.includes(user.type)) {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
