// css
import css from "./Services.module.css";

// assets
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";

// react-icon
import { TiTick } from "react-icons/ti";

export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>آشنایی با سرویس های ما </span>
        <div className={css.serviceText}>
          <div className={css.serviceRight}>
            <div>
              <TiTick size={25} />
              <span>تنوع در انتخاب پیتزا</span>
            </div>
            <div>
              <TiTick size={25} />
              <span>به صرفه ترین قیمت</span>
            </div>
          </div>
          <div className={css.serviceLeft}>
            <div>
              <TiTick size={25} />
              <span>بهترین سرویس دهی</span>
            </div>
            <div>
              <TiTick size={25} />
              <span>ارسال با کمترین هزینه</span>
            </div>
          </div>
        </div>

        {/* features */}
        <div className={css.services}>
          <div className={css.feature}>
            <div className={css.imageWrapper}>
              <img src={s1} alt="" />
            </div>

            <span>- سهولت در سفارش -</span>
            <span>فقط با یه مرحله پیتزاتو سفارش بده</span>
          </div>

          <div className={css.feature}>
            <div className={css.feature}>
              <div className={css.imageWrapper}>
                <img src={s2} alt="" style={{ width: "9rem" }} />
              </div>

              <span>- پیک شبانه روزی -</span>
              <span>24 ساعته پیک موتوریمون آماده ی تحویل سفارشه</span>
            </div>
          </div>

          <div className={css.feature}>
            <div className={css.feature}>
              <div className={css.imageWrapper}>
                <img src={s3} alt="" />
              </div>

              <span>- کیفیت عالی -</span>
              <span>نه فقط سرعتمون بالاست ، کیفیتمونم درجه یکه</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
