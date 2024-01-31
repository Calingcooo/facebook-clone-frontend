import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/auth/auth";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";
import Button from "../components/styled-components/Button";
import fb_logo from "../assets/fb_logo.webp";
import SignUp from "../components/Signup-form";

const Login = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleDataOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/auth/api/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const cookie = Cookies.get("session");
      const c_user = jwtDecode(cookie);
      localStorage.setItem("c_user", JSON.stringify(c_user));

      dispatch(login(c_user));
    } catch (error) {
      alert("Mali ang email at password, tanga ka talaga!");
      console.log(error);
    }
  };

  const handleSignUp = () => {
    setSignUpModal(true);
  };

  console.log(signUpModal);
  return (
    <div className="flex flex-row max-w-[975px] md:m-auto justify-between py-20">
      <div className="flex-wrap  pr-8 pt-16">
        <img src={fb_logo} className="w-64 border-0" />
        <h1 className="text-2xl mt-2 pr-20">
          Connect with friends and the world around you on Facebook.
        </h1>
      </div>
      <div className="flex flex-col items-center w-full max-w-[396px]">
        <div
          className="w-full form-container-shadow
         pt-3 pb-5 px-4 rounded-lg bg-white"
        >
          <form className="flex flex-col w-full" onSubmit={handleLogin}>
            <input
              type="email"
              className="border border-gray-200 text-lg rounded-[8px] px-4 py-3 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:border-blue-500 caret-blue-500 focus:shadow-sm  "
              placeholder="Email or phone number"
              name="email"
              value={formData.email}
              onChange={handleDataOnChange}
            />
            <input
              type="password"
              className="border border-gray-200 text-lg rounded-[4px] px-4 py-3 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:border-blue-500 caret-blue-500 focus:shadow-sm mt-5"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleDataOnChange}
            />
            <Button
              buttonName="Log In"
              buttonStyle="bg-blue-500 hover:bg-blue-400 py-2 text-white text-xl font-bold mt-5 rounded-md tracking-wide ease-in-out duration-300 transition"
            />
          </form>
          <div className="flex flex-col items-center w-full mt-5">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 hover:underline normal-case mb-5 text-sm"
            >
              Forgot password?
            </a>
            <hr className="border-1 border-gray-200 w-full mb-5" />
            <Button
              buttonName="Create new account"
              buttonStyle="bg-green-500 hover:bg-green-600 font-bold text-md tracking-wide text-white px-8 py-3 rounded-md ease-in-out duration-300 transition"
              onClickHandleF={handleSignUp}
            />
          </div>
        </div>
        <p className="tracking-wide text-sm mt-5">
          <a href="#" className="font-bold hover:underline">
            Create a Page
          </a>{" "}
          for a celebrity, brand or business.
        </p>
      </div>
      {signUpModal && <SignUp />}
    </div>
  );
};

export default Login;
