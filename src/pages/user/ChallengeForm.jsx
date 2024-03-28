import React from "react";
import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";
import LinkButton from "../../ui/shared/LinkButton";

function ChallengeForm() {
  return (
    <section className="p-4 md:p-10">
      <div className="max-w-4xl mx-auto p-10 flex flex-col items-center gap-10 bg-white">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Request To Challenge
          </h1>
          <p className="text-base">Please complete the form below</p>
        </div>
        <div className="flex flex-col max-w-4xl w-full gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Input type="text" title="Your Team Name" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm md:text-base" htmlFor="#">
              Comment
            </label>
            <textarea
              name="Comment"
              id="comment"
              rows="5"
              className="px-4 py-2 rounded-2xl border focus:outline-none focus:ring focus:border-[#2AD5A5]"
            ></textarea>
          </div>
        </div>
        <div className="w-full flex justify-end gap-4">
          <LinkButton toPage="/">Cancel</LinkButton>
          <Button>Request</Button>
        </div>
      </div>
    </section>
  );
}

export default ChallengeForm;
