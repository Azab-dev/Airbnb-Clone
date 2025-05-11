export type ExploreItems = {
  img: string;
  location: string;
  distance: string;
};
export type LiveItems = {
  img: string;
  title: string;
};

export type SearchResult = {
  img: string;
  location: string;
  description: string;
  price: string;
  total: string;
  star: number;
  title: string;
  lat: number;
  long: number;
};



export type exploreData = ExploreItems[];
export type liveData = LiveItems[];
export type SearchResultData = SearchResult[];
