import { useQuery } from "@tanstack/react-query";
import { getAllExercises } from "../api/exerciseData";
import { useEffect, useState } from "react";
import SearchField from "../components/SearchField";
import type { Exercise, FilterParameters } from "../types";
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

  console.log(data);

  const [filteredExerciseList, setFilteredExerciseList] = useState<Exercise[]>(
    data || []
  );

  const filterBySearchTerm = (): Exercise[] => {
    const updatedList = data?.filter((item) => item.name.includes(searchTerm));
    return updatedList || [];
  };

  const filterByParam = (exerciseList: Exercise[]) => {
    const { bodyPart, muscles, equipment } = filterParameters;
    const filteredList = exerciseList.filter((exercise) => {
      const isBodyPartMatched =
        bodyPart.length === 0 || bodyPart.includes(exercise.bodyPart);
      const isMuscleMatched =
        muscles.length === 0 || muscles.includes(exercise.target);
      const isEquipmentMatched =
        equipment.length === 0 || equipment.includes(exercise.equipment);
      return isBodyPartMatched && isMuscleMatched && isEquipmentMatched;
    });
    return filteredList;
  };

  useEffect(() => {
    setFilterParameters({ bodyPart: [], muscles: [], equipment: [] });
    setFilteredExerciseList(filterBySearchTerm());
  }, [searchTerm]);

  useEffect(() => {
    const updatedList = filterBySearchTerm();
    setFilteredExerciseList(filterByParam(updatedList));
  }, [filterParameters]);

  useEffect(() => {
    console.log(filteredExerciseList);
  }, [filteredExerciseList]);

  return (
    <div className="flex justify-between">
      <div className="flex-3 pt-4">
        <SearchField setSearchTerm={setSearchTerm} />
      </div>
      <FilterPanel
        filterParameters={filterParameters}
        setFilterParameters={setFilterParameters}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default DisplayExercises;
