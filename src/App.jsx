import Bottles from "./component/Bottles";

const App = () => {
  return (
    <>
      <div className="container">
        <h1
          style={{ backgroundColor: "green", padding: "15px", color: "white" }}
        >
          Memorable Water Bottles
        </h1>
        <Bottles />
      </div>
    </>
  );
};

export default App;
