import { useEffect, useState } from "react";
import Bottle from "./Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <>
      <div>
        <h1>Bottles : {bottles.length}</h1>
      </div>
      <div className="bottle-box">
        {bottles.map((bottles) => (
          <Bottle bottles={bottles} key={bottles.id} />
        ))}
      </div>
    </>
  );
};

export default Bottles;
