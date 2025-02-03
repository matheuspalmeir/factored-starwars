import Cover from "../Cover";

const FILM_COVERS_FILE_NAMES = new Set([
  "a-new-hope.jpg",
  "return-of-the-jedi.jpg",
  "the-phantom-menace.jpg",
  "the-empire-strikes-back.jpg",
  "attack-of-the-clones.jpg",
  "revenge-of-the-sith.jpg",
]);

const FILM_COVERS_PATH = "/films";

const MovieCovers = () => {
  return (
    <div className="grid justify-center px-6 py-2 grid-cols-2 gap-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6">
      {Array.from(FILM_COVERS_FILE_NAMES).map((fileName) => (
        <Cover
          href={`${FILM_COVERS_PATH}/${fileName}`}
          alt={fileName}
          key={fileName}
          linkTo={`/films/${fileName}`}
        />
      ))}
    </div>
  );
};

export default MovieCovers;
