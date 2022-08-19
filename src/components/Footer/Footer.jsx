// css
import css from "./Footer.module.css";

// Assets
import Logo from "../../assets/Logo.png";

// react icon
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={css.Footer} id="footer">
      <div className={css.social}>
        <IoLogoInstagram size={45} style={{ color: "var(--themeRed)" }} />
        <IoLogoGithub size={45} style={{ color: "var(--themeRed)" }} />
        <IoLogoFacebook size={45} style={{ color: "var(--themeRed)" }} />
      </div>

      {/* logo */}
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Fudo</span>
      </div>

      <span>
        تمامی حقوق مادی و معنوی این سایت متعلق به سایت{" "}
        <span style={{ fontFamily: "Consolas" }}>FUDO SHOP</span> میباشد
      </span>
    </div>
  );
}
