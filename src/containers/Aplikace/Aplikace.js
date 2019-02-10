import React from 'react'


class Aplikace extends React.Component {
    render() {
      return (
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Lidé</h2>
            </div>
            <div className="col-md-4 offset-md-1">
              <h2>Přidat .. </h2>
            </div>
        </div>
      );
    }
  }
    
  export default Aplikace;

  // Example usage: <ShoppingList name="Mark" />