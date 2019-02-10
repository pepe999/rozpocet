import React from 'react'

import { ListPersons } from '../ListPersons';
import { NewPerson } from '../NewPerson';



class Aplikace extends React.Component {

    render() {
      return (
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <ListPersons/>
            </div>
            <div className="col-md-4 offset-md-1">
              <h2>Přidat .. </h2>
              <NewPerson/>
            </div>
        </div>
      );
    }
  }
    
  export default Aplikace;
