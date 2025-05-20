import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as FavoriteIcon } from "@heroicons/react/24/solid";
import type { ExerciseCardProps } from "../types";

const ExerciseCard = ({
  exercise,
  toggleFavorites,
  isFavorite,
}: ExerciseCardProps) => {
  const { gifUrl, name, equipment, target } = exercise;
  return (
    <div className="bg-accent p-3 rounded-md flex flex-col relative group">
      <img src={gifUrl} alt="exercise-gif" />
      <h4 className="font-semibold my-4 text-md line-clamp-2 flex-1">{name}</h4>
      <div className="flex justify-between pt-2 border-t border-neutral text-[10px] text-neutral">
        <p>
          <span>Target Muscle: </span>
          <span className="font-semibold">{target}</span>
        </p>
        <p>
          <span>Equipment: </span>
          <span className="font-semibold">{equipment}</span>
        </p>
      </div>
      <div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center p-2 bg-accent cursor-pointer"
        onClick={toggleFavorites}
      >
        {isFavorite(exercise) ? (
          <FavoriteIcon width={18} />
        ) : (
          <BookmarkIcon width={18} />
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
