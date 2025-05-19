import type { FilterOptionGroupProps } from "../types";

const FilterOptionsGroup = ({
  optionsGroup,
  handleChange,
  values,
}: FilterOptionGroupProps) => {
  const { title, parameter, options } = optionsGroup;
  return (
    <div key={parameter} className="mb-4 p-4">
      <h3 className="font-semibold text-sm mb-2 ">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option: string) => (
          <label key={option} className="flex items-center gap-1">
            <input
              type="checkbox"
              name={parameter}
              value={option}
              checked={values.includes(option)}
              onChange={handleChange}
            />
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterOptionsGroup;
