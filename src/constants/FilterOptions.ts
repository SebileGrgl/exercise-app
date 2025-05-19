import { getFilterOptions } from "../api/exerciseData";
import type { FilterOptionGroup } from "../types";

const filterOptionsGroups: FilterOptionGroup[] = [
  {
    title: "Body Parts",
    parameter: "bodyPart",
    options: await getFilterOptions("bodyPartList"),
  },
  {
    title: "Muscles",
    parameter: "muscles",
    options: await getFilterOptions("targetList"),
  },
  {
    title: "Equipments",
    parameter: "equipment",
    options: await getFilterOptions("equipmentList"),
  },
];

export default filterOptionsGroups;
