import { useEffect, useState } from "react";

const useData = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return [foods];
};

export default useData;
