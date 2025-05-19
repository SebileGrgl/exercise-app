import { useQuery } from "@tanstack/react-query";
import { getAllExercises } from "../api/exerciseData";
import { useState } from "react";
import SearchField from "../components/SearchField";

const DisplayExercises = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data } = useQuery({
    queryKey: ["exercises"],
    queryFn: getAllExercises,
    staleTime: Infinity,
  });

  console.log(data, searchTerm);

  return (
    <div>
      <SearchField setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default DisplayExercises;
