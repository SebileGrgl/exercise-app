import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import type { LoginData, User } from "../types";
import LoginForm from "../components/LoginForm";
import { loginValidationSchema } from "../validations/loginSchema";
import { getLocal, removeLocal, setLocal } from "../utils/localFunctions";
import { toastError, toastSuccess, toastWarn } from "../utils/toastMessages";

const LoginContainer = () => {
  const initialValues: LoginData = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const { values, handleChange, handleSubmit, errors, setValues } = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      login(values);
    },
  });
  const navigate = useNavigate();
  const [userList, setUserList] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(values.rememberMe);

  useEffect(() => {
    const storedUser = getLocal("user");
    if (storedUser) {
      setUser(storedUser);
    } else {
      const userList = getLocal("userList");
      setUserList(userList);
    }
  }, []);

  async function login(values: LoginData) {
    const { email, password, rememberMe } = values;
    if (email && password) {
      const matchedUser = userList.find((user: User) => user.email === email);

      if (matchedUser) {
        setLocal("user", matchedUser);
        navigate("/");
        console.log(values);

        toastSuccess("Successfully logged in!");
        rememberMe
          ? setLocal("rememberedEmail", email)
          : removeLocal("rememberedEmail");
      } else {
        toastError("Incorrect email or password");
      }
    } else {
      toastWarn("Please fill in all fields!");
    }
  }

  useEffect(() => {
    if (!user) {
      const rememberedEmail = getLocal("rememberedEmail");

      if (rememberedEmail) {
        setValues((prev) => ({
          ...prev,
          email: rememberedEmail,
          rememberMe: true,
        }));
        setIsChecked(true);
      }
    }
  }, [user]);

  useEffect(() => {
    setIsChecked(values.rememberMe);
  }, [values.rememberMe]);
  return (
    <div className="   bg-secondary w-full sm:w-2/3 md:w-1/2 xl:w-1/3 rounded-md p-10">
      <h1 className=" text-2xl font-light">Log Into your account</h1>

      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
        isChecked={isChecked}
      />
    </div>
  );
};

export default LoginContainer;
