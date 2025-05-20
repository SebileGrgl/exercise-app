import { useQuery } from "@tanstack/react-query";
import { getAllExercises } from "../api/exerciseData";
import { useEffect, useState } from "react";
import SearchField from "../components/SearchField";
import type { Exercise, FilterParameters } from "../types";
import FilterPanel from "../components/FilterPanel";
import ExercisesList from "../components/ExercisesList";

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
    []
  );
  const [favoriteExercises, setFavoriteExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const favoriteExercises = localStorage.getItem("favorites");
    const favorites: Exercise[] = favoriteExercises
      ? JSON.parse(favoriteExercises)
      : [];
    setFavoriteExercises(favorites);
  }, []);

  const filterBySearchTerm = (): Exercise[] => {
    const updatedList = data?.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
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

  const toggleFavorites = (exercise: Exercise) => {
    const isAlreadyAdded = favoriteExercises.some(
      (item) => item.id === exercise.id
    );
    let updatedList: Exercise[];
    if (isAlreadyAdded) {
      updatedList = favoriteExercises.filter((item) => item.id !== exercise.id);
    } else {
      updatedList = [...favoriteExercises, exercise];
    }
    setFavoriteExercises(updatedList);
    localStorage.setItem("favorites", JSON.stringify(updatedList));
  };

  const isFavorite = (exercise: Exercise): boolean => {
    return favoriteExercises.some((item) => item.id === exercise.id);
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

  useEffect(() => {
    setFilteredExerciseList(data || []);
  }, [data]);

  return (
    <div className="flex justify-between">
      <div className="flex-3 pt-4">
        <SearchField setSearchTerm={setSearchTerm} />
        <ExercisesList
          exercisesList={filteredExerciseList}
          toggleFavorites={toggleFavorites}
          isFavorite={isFavorite}
        />
      </div>
      <div className="flex-1 border-l border-neutral ">
        <div className="sticky top-0 h-screen ">
          <FilterPanel
            filterParameters={filterParameters}
            setFilterParameters={setFilterParameters}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayExercises;
