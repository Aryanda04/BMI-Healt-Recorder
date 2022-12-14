import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fixfatText from "../assets1/fixfatText.png";
import { Icon } from "@iconify/react";
import { auth } from "../firebase";

// import './sidebar.scss';

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <Icon icon="ic:sharp-space-dashboard" />,
    to: "/",
    section: "",
  },
  {
    display: "Information",
    icon: <Icon icon="fluent:book-information-24-filled" />,
    to: "/informasi",
    section: "informasi",
  },
  {
    display: "History",
    icon: <Icon icon="ic:baseline-history" />,
    to: "/riwayat",
    section: "riwayat",
  },
  {
    display: "Pengukuran",
    icon: <Icon icon="akar-icons:person-add" />,
    to: "/pengukuran",
    section: "pengukuran",
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

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={fixfatText} alt="fixfat text logo" />
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Sidebar;
