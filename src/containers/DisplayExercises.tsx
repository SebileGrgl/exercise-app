import { useQuery } from "@tanstack/react-query";
import { getAllExercises } from "../api/exerciseData";
import { useEffect, useState } from "react";
import SearchField from "../components/SearchField";
import type { FilterParameters } from "../types";
import FilterPanel from "../components/FilterPanel";

const DisplayExercises = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterParameters, setFilterParameters] = useState<FilterParameters>({
    bodyPart: [],
    muscles: [],
    equipment: [],
  });

  const { data } = useQuery({
    queryKey: ["exercises"],
    queryFn: getAllExercises,
    staleTime: Infinity,
  });

  useEffect(() => {
    console.log(data, searchTerm, filterParameters);
  }, [filterParameters]);

  return (
    <div className="flex justify-between">
      <div className="flex-3 pt-4">
        <SearchField setSearchTerm={setSearchTerm} />
      </div>
      <FilterPanel setFilterParameters={setFilterParameters} />
    </div>
  );
};

export default DisplayExercises;
