import { useState } from "react";
import axios from "axios";
import Input from "../../ui/shared/Input";
import Logo from "../../assets/img/logo_latin.png";
import Button from "../../ui/shared/Button";
import Fb from "../../assets/img/facebook.png";
import Google from "../../assets/img/google.png";

axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;

function SignIn() {
  const [inputData, setInputData] = useState({
    phone: "",
    password: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios.get("https://api.tarang.site/sanctum/csrf-cookie").then(() => {
      axios.post("https://api.tarang.site/login", inputData, {
        headers: {
          Accept: "application/json",
          Referer: "https://tarang.site",
        },
      });
    });

    console.log(inputData);
  };
  return (
    <div className="flex flex-col items-center gap-10 p-10 xl:px-0">
      <div className="max-w-5xl">
        <div className="flex h-[540px] w-[960px] gap-4 bg-white">
          <div className="flex h-full w-1/2 items-center bg-[#d9d9d9]">
            <img src={Logo} alt="logo" className="h-[470px] w-[470px]" />
          </div>
          <form
            onSubmit={onSubmit}
            className="flex h-full w-1/2 flex-col justify-center gap-4 p-10"
          >
            <h1 className="text-4xl font-bold">Sign In</h1>
            <Input
              id="phone"
              type="text"
              onChange={onChange}
              placeholder="Enter Phone Number"
              isRequired={true}
            />
            <Input
              id="password"
              type="password"
              onChange={onChange}
              placeholder="Password"
              isRequired={true}
            />
            <Button type="submit">Sign In</Button>
            <div className="flex justify-center">
              <p>
                Don't have Account?{" "}
                <a className="hover:underline" href="/signup">
                  Sign Up
                </a>
              </p>
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="w-[140px] border-b-[1px] border-[#d9d9d9]"></div>
              <h1>Sign In With</h1>
              <div className="w-[140px] border-b-[1px] border-[#d9d9d9]"></div>
            </div>
            <div className="flex w-full justify-center gap-10">
              <a href="#">
                <img src={Fb} alt="fb" className="h-[40px] w-[40px]" />
              </a>
              <a href="https://api.tarang.site/auth/google/redirect">
                <img src={Google} alt="google" className="h-[40px] w-[40px]" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
