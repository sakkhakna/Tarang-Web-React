import { useState, useEffect } from "react";
import Logo from "../../assets/img/logo_latin.png";
import Button from "../../ui/shared/Button";
import { useTranslation } from "react-i18next";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function Otp() {
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

  const [otp, setOtp] = useState(Array(6).fill("")); // Initialize state for OTP
  const [timeLeft, setTimeLeft] = useState(60); // Initialize state for countdown
  const { t } = useTranslation();

  useEffect(() => {
    // Exit early when we reach 0
    if (!timeLeft) return;

    // Save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // Add timeLeft as a dependency to re-run the effect when we update it
  }, [timeLeft]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false; // Ensure the input is a number

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]); // Update the OTP array

    // Focus on next input after entering a value
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleResendCode = () => {
    setTimeLeft(60);
    // more logic here
  };

  return (
    <div className="flex flex-col gap-10 p-10 xl:px-0 items-center">
      <div className="max-w-5xl">
        <div className="w-[960px] h-[540px] bg-white flex gap-4">
          <div className="w-1/2 bg-[#d9d9d9] h-full flex items-center">
            <img src={Logo} alt="logo" className="h-[470px] w-[470px]" />
          </div>
          <form
            onSubmit={onSubmit}
            className="w-1/2 h-full flex flex-col gap-4 justify-center p-10"
          >
            <h1 className="text-4xl font-bold text-center">OTP Verification</h1>
            <h1 className=" text-gray-400 text-center">
              Enter the 6 digit code sent to your phone number +88570776079
            </h1>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-xl">Verification Code</h1>
              <div>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              {/* <div className="flex justify-center gap-2">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="w-10 h-10 text-center text-lg border-2 border-[#cfd4d9] rounded-xl"
                      type="text"
                      name="otp"
                      maxLength="1"
                      placeholder="•"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </div> */}
              {timeLeft == 0 ? (
                <button
                  className="hover:text-blue-500"
                  onClick={handleResendCode}
                >
                  {t("resend code")}
                </button>
              ) : (
                <p className="text-center">
                  {t("time left")} : ({timeLeft}s)
                </p>
              )}
            </div>
            <div className="flex gap-4">
              <Button customClass={"md:w-full"}>Back</Button>
              <Button customClass={"md:w-full"} type="submit">
                Verify
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Otp;
