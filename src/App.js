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
      </Table>
    </div>
  );
}

export default App;
