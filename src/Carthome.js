import list from "./data";
import Cards from "./card";

const Carthome = ({ checkProduct, setCart, setSize }) => {
  return (
    <div className="container">
      <div className="row">
        {list.map((item) => (
          <>
            <Cards
              key={item.id}
              item={item}
              checkProduct={checkProduct}
              setCart={setCart}
              setSize={setSize}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Carthome;
