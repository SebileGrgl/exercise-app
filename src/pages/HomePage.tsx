import { useQuery } from "@tanstack/react-query";
import { getAllExercises } from "../api/exerciseData";
import MainLayout from "../layout/MainLayout";

const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: getAllExercises,
    staleTime: Infinity,
  });

  console.log(data, isLoading, error);

  return (
    <>
      <MainLayout>
        <div>Home Page</div>
      </MainLayout>
    </>
  );
};

export default HomePage;
