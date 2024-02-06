import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APClient from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
