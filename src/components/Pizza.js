import React from "react";

function Pizza({ pizza, setEdit }) {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "yah" : "nah"}</td>
      <td>
        <button onClick={() => setEdit(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
