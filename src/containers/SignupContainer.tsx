import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import type { User } from "../types";
import signupValidationSchema from "../validations/signupSchema";
import { getLocal, setLocal } from "../utils/localFunctions";
import { toastError, toastSuccess } from "../utils/toastMessages";

const SignupContainer = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const userList = getLocal("userList");
    setUserList(userList);
  }, []);

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const submit = () => {
    const isAlreadyRegistered = userList.find(
      (user) => user.email === values.email
    );

    if (isAlreadyRegistered) {
      toastError(
        "This email is already registered. Please use a different email."
      );
    } else {
      const updatedUserListData = [...userList, values];
      setLocal("userList", updatedUserListData);
      toastSuccess("Signup successfull!");
      navigate("/");
      console.log(values);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signupValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: submit,
  });

  return (
    <div className="   bg-secondary w-full sm:w-2/3 md:w-1/2 xl:w-1/3 rounded-md p-10">
      <h1 className=" text-2xl font-light">Create your account</h1>

      <SignupForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
      />
    </div>
  );
};

export default SignupContainer;
