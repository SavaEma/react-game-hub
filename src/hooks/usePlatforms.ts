import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
