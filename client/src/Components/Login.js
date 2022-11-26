import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(email));
    console.log(JSON.stringify(password));
  };
  return (
    <div className="bg-slate-200 h-screen flex justify-center  items-center  ">
      {/* Formdiv */}

      <div className=" flex flex-col  h-3/5 w-2/5 bg-white rounded-lg p-20 space-y-16 ">
        <div className=" flex flex-col items-center  space-y-3">
          <h1 className="text-blue-500">
            <b> Welcome Back </b>
          </h1>
          <p>Enter your credentials to access your account.</p>
        </div>
        <div className=" flex flex-col items-center ">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col space-y-4  w-3/5"
          >
            <input
              className="pl-5 p-1   border-solid border-2  rounded-lg"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className=" p-1 pl-5 border-solid border-2 rounded-lg"
              type="password"
              placeholder="Password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* button */}
            <div className=" ">
              <button
                className=" p-1 pl-2 border-solid border-2 rounded-lg bg-blue-500 text-white w-full "
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
