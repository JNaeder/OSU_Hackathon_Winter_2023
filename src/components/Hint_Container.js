import Hint_File from "./Hint_File";

function Hint_Container({ foodList }) {
  const hints = foodList["hints"] ? foodList["hints"] : [];
  console.log(foodList);
  console.log(hints);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Label</th>
            <th>Type</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Calroies</th>
            <th>Protien</th>
          </tr>
        </thead>

        <tbody>
          {hints.map((food, i) => (
            <Hint_File food={food} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Hint_Container;
