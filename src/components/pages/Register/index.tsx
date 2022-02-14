import React from "react";
import Image from "next/image";

import InputField from "@/components/molecules/InputField";
import { H2 } from "@/components/atoms/Typography";

const Register = () => {
  const [formValues, setFormValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username is done saving:", formValues);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFormValues(username: e.target.value);
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log({ formValues });
  
  return (
    <>
      <span>
        <Image
          src="/images/trip-advisor-owl.svg"
          alt="The owl from tripadvisor logo"
          width="200px"
          height="200px"
        />
        <H2 className="font-mono font-bold">
          Sign in to unlock the best of Tripadvisor.
        </H2>
      </span>
      <form className="mt-2" onSubmit={handleSubmit}>
        <InputField
          id="username"
          value={formValues.username}
          placeholder="Enter username"
          onChange={handleChange}
        >
          Username
        </InputField>
        <InputField
          id="email"
          value={formValues.email}
          placeholder="Enter Email"
          onChange={handleChange}
        >
          Email
        </InputField>
        <InputField
          id="password"
          value={formValues.password}
          placeholder="Enter Password"
          type="password"
          onChange={handleChange}
        >
          Password
        </InputField>
        <button
          type="submit"
          className="uppercase w-full px-5 py-3 bg-green-600 hover:bg-green-800 text-white font-medium rounded-md tracking-widest mt-3"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
