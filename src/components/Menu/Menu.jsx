// css
import css from "./Menu.module.css";

// router link
import { Link } from "react-router-dom";

// react icon
import { BsArrowLeftShort } from "react-icons/bs";

export default function Menu(props) {
  const { pizzas } = props;

  return (
    <div className={css.menu} id="menu">
      <div className={css.heading}>
        <span>لیست پیتزاهامون</span>
        <span>هر نوع سبک غذایی و سلیقه ای که داشته باشین</span>
        <span>
          بازم منوی ما براتون پیشنهادای مخصوص خودتونو داره ... به به !!!
        </span>
      </div>

      {/* pizzas */}
      <div className={css.pizzaMenu}>
        {pizzas.map((pizza, id) => {
          return (
            <div className={css.pizza} key={pizza.id}>
              <Link to={`${pizza.id}`}>
                <div className={css.pizzaImage}>
                  <img src={pizza.image} alt="" />
                </div>
              </Link>

              <span>{pizza.name}</span>

              <Link to={`${pizza.id}`}>
                <button className="btn">
                  مشاهده ی جزيیات
                  <BsArrowLeftShort
                    size={20}
                    style={{ borderRadius: "50%", border: "1px solid #fff" }}
                  />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
