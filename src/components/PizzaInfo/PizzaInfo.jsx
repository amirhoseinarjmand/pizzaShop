// css
import css from "./PizzaInfo.module.css";

// hook
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// component
import { Footer } from "../../components";

// assets
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";

// react icon
import { GrLinkPrevious } from "react-icons/gr";

// api
import { getPizzaInfo } from "../../ConectToAPI/ContactToAPI";

export default function PizzaInfo() {
  const param = useParams();
  const pizzaId = parseInt(param.pizzaId);

  const [pizza, setPizza] = useState([]);
  const [pizzaSize, setPizzaSize] = useState(1);
  const [counter, setCounter] = useState(0);

  // function Counter
  const CounterFunc = (type) =>
    type === "increase"
      ? setCounter((prev) => prev + 1)
      : counter === 0
      ? null
      : setCounter((prev) => prev - 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: pizzaData } = await getPizzaInfo(pizzaId);
        setPizza(pizzaData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={css.pizzaInfo}>
        <Link to="/" className={css.backToPrevPage}>
          <GrLinkPrevious />
        </Link>

        {/* right side */}
        <div className={css.right}>
          <img src={pizza.image} alt="" />
        </div>

        {/* left side */}
        <div className={css.left}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>

          <span>
            {pizzaSize === 0
              ? pizza.price0
              : pizzaSize === 1
              ? pizza.price1
              : pizza.price2}{" "}
            تومان
          </span>

          {/* size */}
          <div className={css.size}>
            <span>سایز</span>
            <div className={css.sizeVarient}>
              <div
                onClick={() => setPizzaSize(0)}
                className={pizzaSize === 0 ? css.active : null}
              >
                کوچک
              </div>
              <div
                onClick={() => setPizzaSize(1)}
                className={pizzaSize === 1 ? css.active : null}
              >
                متوسط
              </div>
              <div
                onClick={() => setPizzaSize(2)}
                className={pizzaSize === 2 ? css.active : null}
              >
                بزرگ
              </div>
            </div>
          </div>

          {/* quantity */}
          <div className={css.quantity}>
            <span>تعداد :</span>

            <div className={css.counter}>
              <button onClick={() => CounterFunc("increase")}>
                <img src={RightArrow} alt="" />
              </button>

              <span>{counter}</span>

              <button onClick={() => CounterFunc("decrease")}>
                <img src={LeftArrow} alt="" />
              </button>
            </div>
          </div>

          {/* button */}
          <button className={`btn ${css.btn}`}>افزودن به سبد خرید</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
