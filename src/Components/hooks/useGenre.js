const useGenre = (selecteGenre) => {
  if (selecteGenre.length < 1) return "";

  const GenreId = selecteGenre.map((g) => g.id);
  return GenreId.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
