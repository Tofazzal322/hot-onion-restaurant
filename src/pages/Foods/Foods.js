import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import useData from "../../hooks/useData";
import FoodItem from "./FoodItem";
// import Skeleton from "./Skeleton";
import "./Foods.css";

const Foods = () => {
  const [menuTab, setMeneTab] = useState("allFoods");
  const [loading, setLoading] = useState(false);
  const [foods] = useData();
  console.log(foods);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleMenuTabs = (catagories) => {
    setMeneTab(catagories);
  };
  return (
    <section className="container">
      <div className="d-flex p-5 menus-tab container">
        <div className="me-4">
          <p
            className={
              menuTab === "allFoods"
                ? "active-menu-tab  bg-primary"
                : "menu-tab poppins"
            }
            onClick={() => handleMenuTabs("allFoods")}
          >
            All foods
          </p>
        </div>
        <div className="me-4">
          <p
            className={
              menuTab === "breakfast"
                ? "active-menu-tab  bg-primary"
                : "menu-tab poppins"
            }
            onClick={() => handleMenuTabs("breakfast")}
          >
            Breakfast
          </p>
        </div>
        <div className="me-4">
          <p
            className={
              menuTab === "lunch"
                ? "active-menu-tab bg-danger"
                : "menu-tab poppins"
            }
            onClick={() => handleMenuTabs("lunch")}
          >
            Lunch
          </p>
        </div>
        <div>
          <p
            className={
              menuTab === "dinner"
                ? "active-menu-tab bg-info"
                : "menu-tab poppins"
            }
            onClick={() => handleMenuTabs("dinner")}
          >
            Dinner
          </p>
        </div>
      </div>
      <Row>
        {foods
          .filter((food) => menuTab === food.catagories)
          .map((food) => (
            <FoodItem key={food.id} {...food} />
          ))}
      </Row>
    </section>
  );
};

export default Foods;
