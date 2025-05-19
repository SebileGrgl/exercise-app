import { useFormik } from "formik";
import * as Yup from "yup";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { SearchFieldProps } from "../types";
import { toast } from "react-toastify";

const SearchField = ({ setSearchTerm }: SearchFieldProps) => {
  const submit = (values: { searchTerm: string }) => {
    setSearchTerm(values.searchTerm);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      searchTerm: "",
    },
    validationSchema: Yup.object().shape({
      searchTerm: Yup.string().min(2, "Please enter at least 2 characters"),
    }),
    onSubmit: submit,
  });

  return (
    <form onSubmit={handleSubmit} className="w-full flex ">
      <input
        type="search"
        value={values.searchTerm}
        id="searchTerm"
        placeholder="Enter an exercise name"
        onChange={handleChange}
        className="bg-accent p-2 rounded-tl-md rounded-bl-md outline-none flex-1 max-w-100 text-sm"
      />
      <button
        type="submit"
        className="bg-primary px-3 rounded-tr-md rounded-br-md cursor-pointer"
        onClick={() => errors.searchTerm && toast.warn(errors.searchTerm)}
      >
        <MagnifyingGlassIcon className="text-secondary stroke-3" width={16} />
      </button>
    </form>
  );
};

export default SearchField;
