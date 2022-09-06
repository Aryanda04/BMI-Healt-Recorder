import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import fixfatText from "../assets1/fixfatText.png";
import { Icon } from "@iconify/react";
import { auth } from "../../firebase";
import { NavLink } from "react-router-dom";

import { Button, Nav } from "react-bootstrap";

// import './sidebar.scss';

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    to: "/",
    section: "",
  },
  {
    display: "History",
    icon: "nc-icon nc-notes",
    to: "/riwayat",
    section: "riwayat",
  },
  {
    display: "Information",
    icon: "nc-icon nc-circle-09",
    to: "/informasi",
    section: "informasi",
  },
  {
    display: "Pengukuran",
    icon: "nc-icon nc-paper-2",
    to: "/pengukuran",
    section: "pengukuran",
  },
  {
    logOutBtn: true,
    to: "/",
    display: "Log Out",
    icon: "nc-icon nc-circle-09",
  },
  // {
  //   display: "ProfilForm",
  //   icon: <Icon icon="ic:baseline-history" />,
  //   to: "/formprofil",
  //   section: "formprofil",
  // },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       const sidebarItem = sidebarRef.current.querySelector(
  //         ".sidebar__menu__item"
  //       );
  //       indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
  //       setStepHeight(sidebarItem.clientHeight);
  //     }, 50);
  //   }, []);

  //   // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);
  //   const activeRoute = (routeName) => {
  //     return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  //   };

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              {/* <img src={require("assets/img/reactlogo.png")} alt="..." /> */}
            </div>
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
            Fix Fat
          </a>
        </div>
        <Nav>
          {sidebarNavItems.map((prop, key) => {
            if (!prop.redirect)
              return (
                <>
                  {prop.logOutBtn ? (
                    <li className={"active active-pro"} key={key}>
                      <NavLink
                        to={prop.to}
                        onClick={() => auth.signOut()}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={prop.icon} />
                        <p>{prop.display}</p>
                      </NavLink>
                    </li>
                  ) : (
                    <li
                      className={activeIndex === key ? "active" : ""}
                      key={key}
                    >
                      <NavLink
                        to={prop.to}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={prop.icon} />
                        <p>{prop.display}</p>
                      </NavLink>
                    </li>
                  )}
                </>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
export { sidebarNavItems };
