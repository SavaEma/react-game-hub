import useTrailers from "../hooks/useTrailers";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data, error, isLoading } = useTrailers(slug);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video controls src={first.data[480]} poster={first.preview} />
  ) : null;
};

export default GameTrailer;
