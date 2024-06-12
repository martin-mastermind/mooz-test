export interface ApiMovie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

export interface ApiData {
  Response: string;
  Search: ApiMovie[];
  totalResults: number;
}
