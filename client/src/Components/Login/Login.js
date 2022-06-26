import React, { useState } from "react";
import img from "/home/fueledbychiya/Downloads/Restaurant Outlet Managemnet System/App/client/src/Assets/login.jpg";
import { useForm } from "react-hook-form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (e) => {
    console.log(JSON.stringify(email));
    console.log(JSON.stringify(password));
  };
  return (
    // full screen div
    <div className="flex flex-row  h-screen p-20 bg-stone-100">
      {/* inner div */}
      <div className="flex flex-row w-full ">
        {/* Formdiv */}
        <div className=" bg-white  flex justify-center items-center w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-white flex   flex-col   p-10 w-3/5 h-4/5  "
          >
            <input
              className="rounded-lg  border-b-2  border-blue-400 p-3 m-1 w-4/5"
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" && "Invalid Email"}

            <input
              className="rounded-lg border-b-2 border-blue-400 p-3 m-1 w-4/5"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                },
              })}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password?.type === "required" && " Paassword is empty "}
            {errors.password?.type === "minLength" &&
              " Password must exceed 10 characters "}

            {/* button */}
            <div className=" flex flex-row justify-end  p-1 mt-2 w-4/5">
              <button
                className=" rounded-lg h-10 w-20  border-2 border-blue-400 text-blue-400 "
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-row bg-red-200 w-1/2">
          <img className="w-full h-full" src={img} alt="beach" />
        </div>
      </div>
    </div>
  );
}

export default Login;
