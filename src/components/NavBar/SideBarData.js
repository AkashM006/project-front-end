import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Book Service Call",
    path: "/user/book",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    allowedTypes: [1],
  },
  {
    title: "Service Calls Status",
    path: "/user/calls",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    allowedTypes: [1, 2, 3],
  },
  // {
  //   title: "Service Call Allotment",
  //   path: "/user/calls",
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Service Calls Completed",
  //   path: "/user/calls",
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Service Calls",
  //   path: "/user/calls",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Alloted Service Calls",
  //   path: "/user/calls",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text",
  //   allowedTypes: [2],
  // },
  {
    title: "Create User",
    path: "/user/createuser",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    allowedTypes: [3],
  },
  {
    title: 'Report',
    path: '/user/report',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    allowedTypes: [3]
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <IoIcons.IoIosLogOut />,
    cName: "nav-text",
    allowedTypes: [1, 2, 3],
  },
];
