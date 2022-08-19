import React, { useState } from "react";

// css
import css from "./Header.module.css";

// Assets
import Logo from "../../assets/Logo.png";

// react icon
import { IoBagOutline } from "react-icons/io5";

// hook
import { Link } from "react-scroll";

// react icon
import { GoThreeBars } from "react-icons/go";

export default function Header() {
  const [checkScroll, setCheckScroll] = useState(false);
  const [barOpen, setBarOpen] = useState(false);

  const toggleClassName = () => {
    if (!checkScroll && window.scrollY > 10) {
      setCheckScroll(true);
    } else if (checkScroll && window.scrollY <= 10) {
      setCheckScroll(false);
    }
  };

  window.addEventListener("scroll", toggleClassName);

  const opemBarFunc = () => {
    if (!barOpen) {
      setBarOpen(true);
    } else if (barOpen) {
      setBarOpen(false);
    }
  };

  return (
    <div className={`${css.header} ${checkScroll ? css.stickyHeader : ""} `}>
      {/* logo */}
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Fudo</span>
      </div>

      <ul className={css.menu}>
        <li>
          <Link to="home">خانه</Link> <span></span>
        </li>
        <li>
          <Link to="menu">منو</Link> <span></span>
        </li>
        <li>
          <Link to="footer">تماس با ما</Link> <span></span>
        </li>
      </ul>

      {/* right side */}
      <div className={css.leftSide}>
        <div className={css.cart}>
          <div>
            <IoBagOutline size={25} />
            <div className={css.badge}>1</div>
          </div>
        </div>
      </div>

      {/* bar */}
      <div className={css.bar} onClick={() => opemBarFunc()}>
        <GoThreeBars />
      </div>
      {barOpen ? (
        <ul className={css.barMenu}>
          <li>
            <Link to="home" onClick={() => setBarOpen(false)}>
              خانه
            </Link>
          </li>

          <span></span>

          <li>
            <Link to="menu" onClick={() => setBarOpen(false)}>
              منو
            </Link>
          </li>

          <span></span>

          <li>
            <Link to="footer" onClick={() => setBarOpen(false)}>
              تماس با ما
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
