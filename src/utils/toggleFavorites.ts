import type { Exercise } from "../types";

const toggleFavorites = (
  exercisesList: Exercise[],
  exercise: Exercise,
  setFavoriteExercises: (param: Exercise[]) => void
) => {
  const isAlreadyAdded = exercisesList.some((item) => item.id === exercise.id);
  let updatedList: Exercise[];
  if (isAlreadyAdded) {
    updatedList = exercisesList.filter((item) => item.id !== exercise.id);
  } else {
    updatedList = [...exercisesList, exercise];
  }
  setFavoriteExercises(updatedList);
  localStorage.setItem("favorites", JSON.stringify(updatedList));
};

export default toggleFavorites;
