import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useData from "../../hooks/useData";
import FoodItem from "./FoodItem";
import Skeleton from "./Skeleton";

const Foods = () => {
  const [menuTab, setMeneTab] = useState("Breakfast");
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
      <div className="d-flex p-5 container">
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
                ? "active-menu-tab bg-primary"
                : "menu-tab poppins"
            }
            onClick={() => handleMenuTabs("lunch")}
          >
            Lunch
          </p>
        </div>
        <div >
          <p
            className={
              menuTab === "dinner"
                ? "active-menu-tab bg-primary"
                : "menu-tab poppins"
            }
            onClick={() => handleMenuTabs("dinner")}
          >
            Dinner
          </p>
        </div>
      </div>
      <Row >
        {foods
          .filter((food) => menuTab === food.catagories)
          .map((food) =>
            loading ? (
              <Skeleton key={food.id} />
            ) : (
              <FoodItem key={food.id} {...food} />
            )
          )}
      </Row>
    </section>
  );
};

export default Foods;
