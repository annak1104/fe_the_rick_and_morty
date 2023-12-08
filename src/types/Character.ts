export type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  episode: Episode[],
  origin: { name: string },
  location: { name: string },
};

export type Episode = {
  id: number;
  name: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};