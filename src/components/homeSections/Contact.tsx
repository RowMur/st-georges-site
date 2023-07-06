"use client";

import React, { FormEvent } from "react";
import { useState } from "react";
import Button from "../Button";

interface errorsType {
  email: boolean;
  subject: boolean;
  message: boolean;
}

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<errorsType>();

  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors: errorsType = {
      email: false,
      subject: false,
      message: false,
    };
    let isValid = true;

    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email.length <= 0 || !expression.test(email)) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending...");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          message: message,
          subject: subject,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };

  return (
    <>
      <div id="contactSection" className="bg-grey px-2">
        <div className="max-w-7xl mx-auto grid place-items-center py-12 lg:py-36 xl:py-48">
          <p className="font-bold text-3xl lg:text-4xl text-darkBlue leading-tight tracking-tighter">
            Contact the Club
          </p>
          <form
            onSubmit={handleSubmit}
            className="rounded-lg flex flex-col px-8 py-8 dark:bg-blue-500 w-96"
          >
            <label className="text-left font-medium text-base sm:text-lg lg:text-xl text-blue leading-normal py-1 max-w-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="example@example.com"
              className="rounded-lg outline-none p-2 focus:outline-red"
            />
            {errors?.email && (
              <p className="text-left font-medium text-xs lg:text-sm text-red leading-normal py-1 max-w-lg">
                Invalid email
              </p>
            )}
            <label className="text-left font-medium text-base sm:text-lg lg:text-xl text-blue leading-normal py-1 max-w-lg">
              Subject
            </label>
            <input
              type="text"
              name="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="Friday Sessions"
              className="rounded-lg outline-none p-2 focus:outline-red"
            />
            {errors?.subject && (
              <p className="text-left font-medium text-xs lg:text-sm text-red leading-normal py-1 max-w-lg">
                Subject cannot be empty.
              </p>
            )}
            <label className="text-left font-medium text-base sm:text-lg lg:text-xl text-blue leading-normal py-1 max-w-lg">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Is there a session on this Friday?"
              className="rounded-lg outline-none p-2 focus:outline-red"
            ></textarea>
            {errors?.message && (
              <p className="text-left font-medium text-xs lg:text-sm text-red leading-normal py-1 max-w-lg">
                Message cannot be empty.
              </p>
            )}

            {/* <button className="sm:mx-0 border-solid border-red border-2 rounded-2xl hover:cursor-pointer hover:text-red focus:text-red lg:text-lg font-bold px-8 py-1 mt-4 bg-red hover:bg-opacity-0 focus:bg-opacity-0 outline-none text-grey duration-300">
              {buttonText}
            </button> */}
            <Button text={buttonText} hierachy="primary" fit={false} />
          </form>
          <div>
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thank you! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
