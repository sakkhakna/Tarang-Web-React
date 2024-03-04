import React from "react";
import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";

function RequestForm() {
  return (
    <div className="w-max-5xl p-10 flex flex-col items-center gap-10">
      <div className="flex flex-col gap-2 w-full items-center">
        <h1 className="text-4xl font-bold">Request To Join Match</h1>
        <p className="text-xl text-center">Please complete the form below</p>
      </div>

      <div className="flex w-full gap-4">
        <div className="flex flex-col w-full gap-2 ">
          <label htmlFor="category" className="text-sm md:text-base">
            Your Team
          </label>
          <select
            name="category"
            id="category"
            className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
          >
            <option value={null}>select</option>
            <option value="Badminton">team1</option>
            <option value="Ping Pong">team2</option>
          </select>
        </div>
        <div className="w-full">
          <Input type="text" title="Your Contact" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <label htmlFor="#">Comment</label>
        <textarea name="Comment" id="comment" cols="150" rows="5"></textarea>
      </div>
      <div className="flex gap-4">
        <Button customClass="md:w-[200px]">Cancel</Button>
        <Button customClass="md:w-[200px]">Request</Button>
      </div>
    </div>
  );
}

export default RequestForm;
