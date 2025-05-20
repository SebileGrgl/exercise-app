import { useEffect, useState } from "react";
import type { Exercise } from "../types";
import ExercisesList from "../components/ExercisesList";
import toggleFavorites from "../utils/toggleFavorites";
import { getLocal } from "../utils/localFunctions";

const FavoritesExercisesContainer = () => {
  const [favoriteExercises, setFavoriteExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const favoriteExercises = getLocal("favorites");
    setFavoriteExercises(favoriteExercises);
  }, []);

  const isFavorite = (exercise: Exercise): boolean => {
    return favoriteExercises.some((item) => item.id === exercise.id);
  };

  return (
    <ExercisesList
      exercisesList={favoriteExercises}
      isFavorite={isFavorite}
      toggleFavorites={(item: Exercise) => {
        toggleFavorites(favoriteExercises, item, setFavoriteExercises);
      }}
    />
  );
};

export default FavoritesExercisesContainer;
