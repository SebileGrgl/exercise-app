import { useState } from "react";
import { Link } from "react-router-dom";
import type { SignupFormProps } from "../types";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const SignupForm = ({
  handleChange,
  handleSubmit,
  values,
  errors,
}: SignupFormProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
  }

  const { fullName, email, password, confirmPassword } = values;

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 ">
      <div>
        <div
          className={`flex items-center gap-4 py-2 border-b border-primary/40 `}
        >
          <UserIcon width={18} className="stroke-primary/40 stroke-2" />
          <input
            className="text-[14px]  focus:outline-none w-full"
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
            value={fullName}
          />
        </div>
        <p className="text-[10px] text-red-800 mt-2">{errors.fullName}</p>
      </div>
      <div>
        <div className="flex items-center gap-4 py-2 border-b border-primary/40">
          <EnvelopeIcon width={16} className="stroke-primary/40 stroke-2" />
          <input
            className="text-[14px] focus:outline-none w-full"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <p className="text-[10px] text-red-800 mt-2">{errors.email}</p>
      </div>
      <div>
        <div className="flex items-center gap-4 py-2 border-b border-primary/40">
          <div className="flex items-center gap-4 w-full">
            <LockClosedIcon width={16} className="stroke-primary/40 stroke-2" />
            <input
              className="text-[14px] focus:outline-none w-full"
              onChange={handleChange}
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
            />
          </div>
          <span onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <EyeIcon
                width={16}
                className="cursor-pointer stroke-primary/40 stroke-2 hover:stroke-primary/60"
              />
            ) : (
              <EyeSlashIcon
                width={16}
                className="cursor-pointer stroke-primary/40 stroke-2 hover:stroke-primary/60"
              />
            )}
          </span>
        </div>
        <p className="text-[10px] text-red-800 mt-2">{errors.password}</p>
      </div>
      <div>
        <div className="flex items-center gap-4 py-2 border-b border-primary/40">
          <LockClosedIcon width={16} className="stroke-primary/40 stroke-2" />

          <input
            className="text-[14px] focus:outline-none w-full"
            onChange={handleChange}
            name="confirmPassword"
            type={passwordVisible ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
          />
        </div>
        <p className="text-[10px] text-red-800 mt-2">
          {errors.confirmPassword}
        </p>
      </div>
      <input
        type="submit"
        value="Signup"
        className="bg-primary rounded-xl py-[4px] text-[14px] mt-3 cursor-pointer text-secondary hover:shadow-lg"
      />

      <div className="mt-5">
        <p className="flex justify-center items-center text-sm text-primary">
          Already have an account?
        </p>
        <Link
          className="border-primary text-primary border-1 rounded-xl py-[4px] text-sm flex justify-center items-center mt-2 cursor-pointer  hover:bg-primary hover:text-secondary transition-bg duration-250 ease-in-out"
          to="/login"
        >
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
