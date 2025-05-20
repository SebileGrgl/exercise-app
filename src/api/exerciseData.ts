import type { Exercise, GetExercisesByPage } from "../types";
import { axiosInstance } from "./axiosInstance";

export const getExercisesByPage = async (
  params: GetExercisesByPage
): Promise<Exercise[]> => {
  const res = await axiosInstance.get<Exercise[]>("/exercises", {
    params: {
      limit: params.limit,
      offset: params.offset,
    },
  });
  return res.data;
};

export const getExerciseById = async (id: string): Promise<Exercise> => {
  const res = await axiosInstance.get<Exercise>(`/exercises/exercise/${id}`);
  return res.data;
};

export const getFilterOptions = async (
  filterParam: string
): Promise<string[]> => {
  const res = await axiosInstance.get<string[]>(`/exercises/${filterParam}`);
  return res.data;
};
