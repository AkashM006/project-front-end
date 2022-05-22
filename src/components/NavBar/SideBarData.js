import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "Book a Service Call",
    path: "/user/book",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Service Call Status",
    path: "/user/status",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Service Call Allotment",
    path: "/user/calls",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Service Calls Completed",
    path: "/user/calls",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Service Calls",
    path: "/user/calls",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Alloted Service Calls",
    path: "/user/calls",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Create User",
    path: "/user/createuser",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
