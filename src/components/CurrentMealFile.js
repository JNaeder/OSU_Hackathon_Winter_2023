function CurrentMealFile({ food }) {
  const theBrand = food["food"]["brand"];
  const theLabel = food["food"]["label"];
  const theCategory = food["food"]["category"];
  const theUnits = food["measures"];
  const theNutrients = food["food"]["nutrients"];
  return (
    <>
      <tr>
        <td>{theLabel}</td>
      </tr>
    </>
  );
}

export default CurrentMealFile;
