// css
import css from "./BackToTop.module.css";

// react icon
import { BsFillArrowUpCircleFill } from "react-icons/bs";

// hook
import { useState } from "react";

export default function BackToTop() {
  const [scrollToTop, setScrollToTop] = useState(false);

  const checkScroll = () => {
    if (!scrollToTop && window.pageYOffset > 300) {
      setScrollToTop(true);
    } else if (scrollToTop && window.pageYOffset <= 300) {
      setScrollToTop(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    checkScroll();
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <BsFillArrowUpCircleFill
      className={`${css.scrollTop} ${scrollToTop ? css.active : ""} `}
      onClick={scrollTop}
    />
  );
}
