import type { Exercise } from "../types";
import { axiosInstance } from "./axiosInstance";

export const getAllExercises = async (): Promise<Exercise[]> => {
  const res = await axiosInstance.get<Exercise[]>("/exercises");
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
