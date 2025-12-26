import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Didmount");
  }

  render() {
    const { name, email } = this.props;
    const { count, count2 } = this.state;
    console.log("Child component render");
    return (
      <div className="user-card">
        {/* <h1>Name: {this.props.name}</h1> */}
        <h3>Count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h3>Count2 : {count2}</h3>
        <h1>Name: {name}</h1>
        <h2>Email: {email}</h2>
        <h3>Call: 99564 65783</h3>
      </div>
    );
  }
}
export default UserClass;
