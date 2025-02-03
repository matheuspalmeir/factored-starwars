export type FilmAPIData = {
  properties: {
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    producer: string;
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
    opening_crawl: string;
    url: string;
  };
  description: string;
  _id: string;
  uid: string;
  __v: number;
};

export type FilmsResponse = {
  message: string;
  result: FilmAPIData[];
};

export type CharactersResponse = {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: {
    uid: string;
    name: string;
    url: string;
  }[];
};

export type CharacterResponse = {
  message: string;
  result: [
    {
      properties: {
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        created: string;
        edited: string;
        name: string;
        homeworld: string;
        url: string;
      };
      description: string;
      _id: string;
      uid: string;
      __v: number;
    }
  ];
};
