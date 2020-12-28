import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
