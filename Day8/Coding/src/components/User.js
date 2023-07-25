// const User = () => {
//   return (
//     <div>
//       <h3>Name: Aditi</h3>
//       <h4>Location: Banglore</h4>
//     </div>
//   );
// };

// export default User;

import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <h4>{location}</h4>
      </div>
    );
  }
}

export default User;
