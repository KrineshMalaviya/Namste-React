import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Didmount");
  }

  render() {
    console.log("Parent Component Render");
    return (
      <div>
        <h1>Aboutus | Krinesh Foods</h1>
        <User name={"Function Based"} email={"fucntion@gmail.com"} />
        <UserClass name={"Class Based"} email={"class@gmail.com"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>Aboutus | Krinesh Foods</h1>
//       <User name={"Function Based"} email={"fucntion@gmail.com"} />
//       <UserClass name={"Class Based"} email={"class@gmail.com"} />
//     </div>
//   );
// };

export default About;
