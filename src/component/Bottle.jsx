const Bottle = ({ bottles }) => {
  const { name, price, img } = bottles;
  return (
    <>
      <div className="box">
        <h2>{name}</h2>
        <img src={img} alt="" />
        <h4> Price : {price}</h4>
      </div>
    </>
  );
};

export default Bottle;
