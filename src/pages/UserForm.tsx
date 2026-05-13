import { useState } from "react";
import { createUser } from "../services/UserService.js";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    const user = { username, email, password };

    createUser(user)
      .then((response) => {
        console.log("ADDED TO DATABASE");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1 className="text-4xl mb-6">ADD USER</h1>

      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-black mb-4"
        />

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black mb-4"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black mb-4"
        />

        <input
          type="submit"
          value="submit"
          className="bg-black text-white mt-8 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default UserForm;
