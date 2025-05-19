import { useFormik } from "formik";
import * as Yup from "yup";
import filterOptionsGroups from "../constants/FilterOptions";
import FilterOptionsGroup from "./FilterOptionsGroup";
import type { FilterPanelProps, FilterParameters } from "../types";

const FilterPanel = ({ setFilterParameters }: FilterPanelProps) => {
  const initialValues = {
    bodyPart: [],
    muscles: [],
    equipment: [],
  };
  const filterSchema = Yup.object().shape({
    bodyPart: Yup.array().of(Yup.string()),
    muscles: Yup.array().of(Yup.string()),
    equipment: Yup.array().of(Yup.string()),
  });

  const { values, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: initialValues,
    validationSchema: filterSchema,
    onSubmit: () => {
      setFilterParameters(values);
    },
    onReset: () => {
      setFilterParameters(initialValues);
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="flex-1 border-l border-neutral px-2 h-screen overflow-y-auto "
    >
      {filterOptionsGroups.map((item) => (
        <FilterOptionsGroup
          key={item.parameter}
          optionsGroup={item}
          values={values[item.parameter as keyof FilterParameters]}
          handleChange={handleChange}
        />
      ))}

      <div className="sticky flex  bottom-0 border-t border-neutral gap-3 bg-secondary py-4 px-4">
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
