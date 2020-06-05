import React from "react";
import { Button } from "reactstrap";
import { Table } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Eggs</td>
            <td>12</td>
            <td>
              <button>Edit</button>
              <button>Remove</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
