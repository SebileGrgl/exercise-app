import type { ExercisesListProps } from "../types";
import ExerciseCard from "./ExerciseCard";

const ExercisesList = ({ exercisesList }: ExercisesListProps) => {
  return (
    <div className="mt-6 pr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {exercisesList.map((item) => (
        <ExerciseCard key={item.id} exercise={item} />
      ))}
    </div>
  );
};

export default ExercisesList;
