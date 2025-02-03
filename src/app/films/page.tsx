import FilmsList, { Film } from "../ui/components/FilmsList";

const mockData: Array<Film> = [
  {
    properties: {
      characters: 15,
      planets: 3,
      starships: 8,
      vehicles: 4,
      species: 5,
      created: "2025-02-02T13:42:49.766Z",
      edited: "2025-02-02T13:42:49.766Z",
      producer: "Gary Kurtz, Rick McCallum",
      title: "A New Hope",
      episodeId: 4,
      director: "George Lucas",
      releaseDate: "1977-05-25",
      openingCrawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      url: "https://www.swapi.tech/api/films/1",
    },
  },
  {
    properties: {
      characters: 10,
      planets: 20,
      starships: 30,
      vehicles: 9,
      species: 5,
      created: "2025-02-02T13:42:49.766Z",
      edited: "2025-02-02T13:42:49.766Z",
      producer: "Gary Kurtz, Rick McCallum",
      title: "The Empire Strikes Back",
      episodeId: 5,
      director: "Irvin Kershner",
      releaseDate: "1980-05-17",
      openingCrawl:
        "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
      url: "https://www.swapi.tech/api/films/2",
    },
  },
];

const Films = () => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <FilmsList data={mockData} />
    </div>
  );
};

export default Films;
