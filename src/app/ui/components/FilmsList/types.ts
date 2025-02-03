export type Film = {
  id: string;
  title: string;
  releaseDate: Date;
  director: string;
  openingCrawl: string;
  characters: number;
  planets: number;
  starships: number;
  vehicles: number;
  species: number;
  created: Date;
  edited: Date;
  producer: string;
  episodeId: number;
  url: string;
};

export type FilmsData = Array<Film>;
