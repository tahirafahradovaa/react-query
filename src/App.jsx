import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const App = () => {
  const { data, isLoading } = useQuery("products", () => {
    return axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => res.data);
  });

  return (
    // <div>
    //   <button onClick={() => console.log(data)}>click</button>
    //   {data?.map((item) => {
    //     return <h1>{item.name}</h1>;
    //   })}
    // </div>
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Unit Price</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.unitPrice}</td>
                <td>{item.name}</td>
                <td>{item.quantityPerUnit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;
