import { useState } from "react";

const User = ({ name, email }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
      <h3>Call: 99564 65783</h3>
    </div>
  );
};

export default User;
