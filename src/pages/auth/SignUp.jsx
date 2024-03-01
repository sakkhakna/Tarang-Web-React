import React from "react";
import Input from "../ui/shared/Input";
import Logo from "../../assets/img/logo_latin.png";
import Button from "../ui/shared/Button";
import Fb from "../../assets/img/facebook.png";
import Google from "../../assets/img/google.png";

function SignUp() {
  return (
    <div className="flex flex-col gap-10 p-10 xl:px-0 items-center">
      <div className="max-w-5xl">
        <div className="w-[960px] h-[540px] bg-white flex gap-4">
          <div className="flex w-1/2 bg-[#d9d9d9] h-full items-center">
            <img src={Logo} alt="logo" className="h-[470px] w-[470px]" />
          </div>
          <div className="w-1/2 h-full flex flex-col gap-4 justify-center p-10">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <Input placeholder="Enter Name" 
            />
            <Input placeholder="Enter Phone Number"
            />
            <Button customClass="md:text-xl h-[20px] py-1">Sign Up</Button>
            <div className="flex justify-center">
              <p>
                Already have Account? <a className="hover:underline" href="/signin">Sign In</a>
              </p>
            </div>
            <div className="w-full flex justify-center gap-2">
              <div className="border-b-2 w-[140px] h-[15px] border-black"></div>
              <h1>Sign In With</h1>
              <div className="border-b-2 w-[140px] h-[15px] border-black"></div>
            </div>
            <div className="w-full flex gap-10 justify-center">
              <a href="#">
                <img src={Fb} alt="fb" className="w-[40px] h-[40px]" />
              </a>
              <a href="#">
                <img src={Google} alt="google" className="w-[40px] h-[40px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
