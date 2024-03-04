import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../ui/shared/Input";
import Logo from "../../assets/img/logo_latin.png";
import Button from "../../ui/shared/Button";
import Fb from "../../assets/img/facebook.png";
import Google from "../../assets/img/google.png";

function SignUp() {
  const [inputData, setInputData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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
    console.log(inputData);
  };
  return (
    <div className="flex flex-col gap-10 p-10 xl:px-0 items-center">
      <div className="max-w-5xl">
        <div className="w-[960px] h-[540px] bg-white flex gap-4">
          <div className="flex w-1/2 bg-[#d9d9d9] h-full items-center">
            <img src={Logo} alt="logo" className="h-[470px] w-[470px]" />
          </div>
          <form
            onSubmit={onSubmit}
            className="w-1/2 h-full flex flex-col gap-4 justify-center p-10"
          >
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <Input
              id="name"
              type="text"
              onChange={onChange}
              placeholder="Enter Name"
              isRequired={true}
            />
            <Input
              id="phoneNumber"
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
            <Input
              id="confirmPassword"
              type="password"
              onChange={onChange}
              placeholder="Confirm Password"
              isRequired={true}
            />
            <Button type="submit">Sign Up</Button>
            <div className="flex justify-center">
              <p>
                Already have Account?{" "}
                <a className="hover:underline" href="/signin">
                  Sign In
                </a>
              </p>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <div className="border-b-[1px] w-[140px] border-[#d9d9d9]"></div>
              <h1>Sign In With</h1>
              <div className="border-b-[1px] w-[140px] border-[#d9d9d9]"></div>
            </div>
            <div className="w-full flex gap-10 justify-center">
              <Link to="/">
                <img src={Fb} alt="fb" className="w-[40px] h-[40px]" />
              </Link>
              <Link to="/">
                <img src={Google} alt="google" className="w-[40px] h-[40px]" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
