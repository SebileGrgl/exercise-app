import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import SearchField from "../components/SearchField";
import type { Exercise, FilterParameters } from "../types";
import FilterPanel from "../components/FilterPanel";
import ExercisesList from "../components/ExercisesList";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import MobileFilterPanel from "../components/MobileFilterPanel";
import toggleFavorites from "../utils/toggleFavorites";
import { getLocal } from "../utils/localFunctions";
import { getExercisesByPage } from "../api/exerciseData";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "../components/NotFound";

const ITEMS_PER_PAGE = 18;

const DisplayExercises = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterParameters, setFilterParameters] = useState<FilterParameters>({
    bodyPart: [],
    muscles: [],
    equipment: [],
  });

  const [favoriteExercises, setFavoriteExercises] = useState<Exercise[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery<
      Exercise[],
      Error,
      InfiniteData<Exercise[], number>,
      string[],
      number
    >({
      queryKey: ["exercises"],
      queryFn: async ({ pageParam = 0 }) => {
        const exercises = await getExercisesByPage({
          limit: ITEMS_PER_PAGE,
          offset: pageParam,
        });
        return exercises;
      },
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        if (lastPage.length === 0 || lastPage.length < ITEMS_PER_PAGE) {
          return undefined;
        }
        const nextOffset = lastPageParam + lastPage.length;
        return nextOffset;
      },
      initialPageParam: 0,
      staleTime: Infinity,
    });

  const allFetchedExercises = data?.pages.flatMap((page) => page) || [];

  useEffect(() => {
    const favoriteExercises = getLocal("favorites") || [];
    setFavoriteExercises(favoriteExercises);
  }, []);

  const filterBySearchTerm = (list: Exercise[]) => {
    const updatedList = list.filter((item: Exercise) =>
      item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    return updatedList;
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

  const filteredExerciseList = useMemo(() => {
    let updatedList = allFetchedExercises;

    if (searchTerm.trim()) {
      updatedList = filterBySearchTerm(updatedList) || [];
    }

    if (updatedList.length > 0) {
      updatedList = filterByParam(updatedList) || [];
    }

    return updatedList;
  }, [allFetchedExercises, searchTerm, filterParameters]);

  const isFavorite = (exercise: Exercise): boolean => {
    return favoriteExercises.some((item) => item.id === exercise.id);
  };

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  if (filteredExerciseList.length < 1)
    return (
      <NotFound title="Unfortunately, no exercises were found that match your filters." />
    );

  return (
    <div className="flex justify-between relative">
      <div className="flex-3 pt-4 pr-6">
        <div className="flex justify-between items-center gap-3">
          <SearchField setSearchTerm={setSearchTerm} />

          <button
            onClick={() => setIsPanelOpen(true)}
            className=" bg-primary text-secondary rounded-md text-sm lg:hidden p-2"
          >
            <span className="hidden sm:inline">Filtrele</span>
            <span className="sm:hidden">
              <AdjustmentsHorizontalIcon width={22} />
            </span>
          </button>
        </div>
        <ExercisesList
          exercisesList={filteredExerciseList}
          isFavorite={isFavorite}
          toggleFavorites={(item: Exercise) => {
            toggleFavorites(favoriteExercises, item, setFavoriteExercises);
          }}
        />

        {hasNextPage && (
          <div className="flex justify-center mt-6 mb-4">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="bg-neutral text-secondary px-4 py-2 rounded-md disabled:opacity-50"
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 border-l border-neutral hidden lg:block ">
        <div className="sticky top-0 h-screen ">
          <FilterPanel
            filterParameters={filterParameters}
            setFilterParameters={setFilterParameters}
            searchTerm={searchTerm}
            setIsOpen={setIsPanelOpen}
          />
        </div>
      </div>
      <MobileFilterPanel
        isOpen={isPanelOpen}
        setIsOpen={setIsPanelOpen}
        filterParameters={filterParameters}
        setFilterParameters={setFilterParameters}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default DisplayExercises;
