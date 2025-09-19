const Bottle = ({ bottles, pursesHandle }) => {
  const { name, price, img } = bottles;

  return (
    <>
      <div className="box">
        <h2>{name}</h2>
        <img src={img} alt="" />
        <h4> Price : {price}</h4>
        <button onClick={() => pursesHandle(bottles)}>Purses</button>
      </div>
    </>
  );
};

export default Bottle;
