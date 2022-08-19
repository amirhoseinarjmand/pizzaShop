// css
import css from "./Hero.module.css";

// assets
import Cherry from "../../assets/Cherry.png";
import HeroImage from "../../assets/HeroImage.png";
import Pizzal from "../../assets/p1.jpg";

// react icon
import { HiOutlinePhone } from "react-icons/hi";

export default function Hero() {
  return (
    <div className={css.hero} id="home">
      {/* right side */}
      <div className={css.right}>
        <div className={css.title}>
          <span>خوشمزه تر از چیزی که فکرشو بکنی . . .</span>
          <img src={Cherry} alt="" />
        </div>

        <div className={css.text}>
          <span>سریعتر از چیزی</span>
          <span>که فکرشو بکنی</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>پیتزات</span> آمادست !
          </span>
        </div>

        <span className={css.miniText}>
          تلاش ما این است که ماندگار ترین خاطره ها را در ذهن شما به یادگار
          بگذاریم ...
        </span>

        <button className="btn">سفارش دهید</button>
      </div>

      {/* left side */}
      <div className={css.left}>
        <div className={css.heroImage}>
          <img src={HeroImage} alt="" style={{ direction: "ltr" }} />
        </div>

        <div className={css.contactUs}>
          <span>تماس با ما</span>
          <div>
            <HiOutlinePhone size={18} />
          </div>
        </div>

        <div className={css.pizza}>
          <div>
            <img src={Pizzal} alt="" />
          </div>
          <div className={css.details}>
            <span> پیتزا ایتالیایی</span>
            <div> 115000 </div>
          </div>
        </div>
      </div>
    </div>
  );
}
