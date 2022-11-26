import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords don't match");
    } else {
      console.log(JSON.stringify(FirstName));
      console.log(JSON.stringify(LastName));
      console.log(JSON.stringify(email));
      console.log(JSON.stringify(password));
    }
  };

  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div className=" bg-white h-3/5 w-2/5 flex flex-col p-10">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-blue-500">
            <b> Create an account</b>
          </h1>
          <p>let's get started</p>
        </div>
        <div className=" flex flex-col items-center  ">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col items-center space-y-4 p-4  "
          >
            <input
              className="border-2 rounded-lg p-1 pl-5 "
              name="FirstName"
              placeholder="FirstName"
              type="text"
              value={FirstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className="border-2 rounded-lg p-1 pl-5"
              name="LastName"
              placeholder="LastName"
              type="text"
              value={LastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              className="border-2 rounded-lg p-1 pl-5"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border-2 rounded-lg p-1 pl-5"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              required
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="border-2 rounded-lg p-1 pl-5"
              name="confirmpassword"
              required
              placeholder="Confirm Password"
              minLength={8}
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />

            <div className="flex flex-col w-full ">
            <button className="border-2 rounded-lg p-1 bg-blue-500 text-white">
              Create Account
            </button>
            </div>
          </form>
        </div>
        <div>
          <b className="p-7 flex flex-col items-center">
            Already have Account ? <Link to="/login"> <p className="text-blue-500">Login. </p></Link>
          </b>
        </div>
      </div>
    </div>
  );
}

export default Signup;
