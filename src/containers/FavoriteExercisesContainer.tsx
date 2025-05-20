import { useEffect, useState } from "react";
import type { Exercise } from "../types";
import ExercisesList from "../components/ExercisesList";
import toggleFavorites from "../utils/toggleFavorites";

const FavoritesExercisesContainer = () => {
  const [favoriteExercises, setFavoriteExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const favoriteExercises = localStorage.getItem("favorites");
    const favorites: Exercise[] = favoriteExercises
      ? JSON.parse(favoriteExercises)
      : [];
    setFavoriteExercises(favorites);
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
