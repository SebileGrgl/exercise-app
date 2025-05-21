import { useEffect, useState } from "react";
import type { Exercise } from "../types";
import ExercisesList from "../components/ExercisesList";
import toggleFavorites from "../utils/toggleFavorites";
import { getLocal } from "../utils/localFunctions";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "../components/NotFound";

const FavoritesExercisesContainer = () => {
  const [favoriteExercises, setFavoriteExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const favoriteExercises = getLocal("favorites") || [];
    setFavoriteExercises(favoriteExercises);
    setIsLoading(false);
  }, []);

  const isFavorite = (exercise: Exercise): boolean => {
    return favoriteExercises.some((item) => item.id === exercise.id);
  };

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  if (favoriteExercises.length < 1)
    return (
      <NotFound title="Looks like you haven't favorited any exercises yet." />
    );

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
