import { useEffect, useState } from "react";
import { addCartLS, getStoreCarts, removeLS } from "../utilities/localstorage";
import Bottle from "./Bottle";
import Cart from "./Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const pursesHandle = (bottles) => {
    const newBottles = [...cards, bottles];
    setCards(newBottles);
    addCartLS(bottles.id);
  };
  const saveCarts = [];

  useEffect(() => {
    if (bottles.length > 0) {
      const storeCart = getStoreCarts();

      for (const id of storeCart) {
        const bottle = bottles.find((bottle) => bottle.id !== id);
        if (bottle) {
          saveCarts.push(bottle);
        }
      }
      setCards(saveCarts);
    }
  }, [bottles]);

  const removeHandle = (id) => {
    const remainingCart = cards.filter((bottle) => bottle.id !== id);
    setCards(remainingCart);
    removeLS(id);
  };

  return (
    <>
      <div>
        <h1>Bottles : {bottles.length}</h1>
        <Cart cards={cards} removeHandle={removeHandle} />
      </div>
      <div className="bottle-box">
        {bottles.map((bottles) => (
          <Bottle
            bottles={bottles}
            key={bottles.id}
            pursesHandle={pursesHandle}
          />
        ))}
      </div>
    </>
  );
};

export default Bottles;
