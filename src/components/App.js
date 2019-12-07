import React from 'react';
import Form from "./Form";

class App extends React.Component{
  render(){
    return (
      <div className="container wrapper">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
