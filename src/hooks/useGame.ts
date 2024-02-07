import { useQuery } from "@tanstack/react-query";
import APClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
