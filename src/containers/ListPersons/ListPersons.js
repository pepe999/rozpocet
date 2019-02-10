import React from 'react'
import { connect } from 'react-redux'



const mapStateToProps = state => {
  return { persons: state.persons };
};

const PersonsList = ({ persons }) => (
  <ul className="list-group list-group-flush">
    {persons.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.name}
      </li>
    ))}
  </ul>
);

// class PersonsList extends React.Component {
  
//     render() {
//       return (
//         <div>
//           <ul className="list-group list-group-flush">
//             {persons.map(el => (
//               <li className="list-group-item" key={el.id}>
//                 {el.jmeno}
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }
    
//  export default ListPersons;


  const ListPersons = connect(
    mapStateToProps//,
//    mapDispatchToProps
  )(PersonsList)
  
  export default ListPersons
