import React from "react";
import { Table, Button } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div>
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
                <Button color="info" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button color="danger" size="sm">
                  Remove
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
