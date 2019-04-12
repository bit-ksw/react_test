import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.image} alt="profile" />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>
    );
  }
}

// class CustomerInfo extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>{this.props.id}</div>
//         <div>
//           <img src={this.props.image} alt={this.props.name} />
//         </div>
//       </div>
//     );
//   }
// }

// class CustomerDetail extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>{this.props.name}</div>
//         <div>{this.props.birthday}</div>
//         <div>{this.props.gender}</div>
//         <div>{this.props.job}</div>
//       </div>
//     );
//   }
// }

export default Customer;
