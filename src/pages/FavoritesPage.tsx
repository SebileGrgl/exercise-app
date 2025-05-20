import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import type { Exercise } from "../types";
import ExercisesList from "../components/ExercisesList";
import toggleFavorites from "../utils/toggleFavorites";

const FavoritesPage = () => {
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
    <MainLayout>
      <ExercisesList
        exercisesList={favoriteExercises}
        isFavorite={isFavorite}
        toggleFavorites={(item: Exercise) => {
          toggleFavorites(favoriteExercises, item, setFavoriteExercises);
        }}
      />
    </MainLayout>
  );
};

export default FavoritesPage;
