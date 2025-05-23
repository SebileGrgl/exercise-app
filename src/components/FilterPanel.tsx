import { useFormik } from "formik";
import * as Yup from "yup";
import filterOptionsGroups from "../constants/FilterOptions";
import FilterOptionsGroup from "./FilterOptionsGroup";
import type { FilterPanelProps, FilterParameters } from "../types";
import { useEffect } from "react";

const FilterPanel = ({
  filterParameters,
  setFilterParameters,
  searchTerm,
  setIsOpen,
}: FilterPanelProps) => {
  const filterSchema = Yup.object().shape({
    bodyPart: Yup.array().of(Yup.string()),
    muscles: Yup.array().of(Yup.string()),
    equipment: Yup.array().of(Yup.string()),
  });

  const resetedValues: FilterParameters = {
    bodyPart: [],
    muscles: [],
    equipment: [],
  };

  const { values, handleChange, handleSubmit, handleReset, setValues } =
    useFormik({
      initialValues: filterParameters,
      validationSchema: filterSchema,
      onSubmit: () => {
        setFilterParameters(values);
        setIsOpen(false);
      },
      onReset: () => {
        setFilterParameters(resetedValues);
        setIsOpen(false);
      },
    });

  useEffect(() => {
    setValues(resetedValues);
  }, [searchTerm]);

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="  flex flex-col  px-2  h-full "
    >
      <div className=" overflow-y-auto flex-1 ">
        {filterOptionsGroups.map((item) => (
          <FilterOptionsGroup
            key={item.parameter}
            optionsGroup={item}
            values={values[item.parameter as keyof FilterParameters]}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div className=" sticky bottom-0  w-full flex border-t border-neutral gap-3 bg-secondary py-4 px-4">
        <button
          type="submit"
          className=" bg-primary flex-1 text-secondary text-sm py-2 rounded-md"
        >
          Apply
        </button>
        <button
          type="reset"
          className="border-1 flex-1 border-primary text-primary text-sm py-2 rounded-md "
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default FilterPanel;
