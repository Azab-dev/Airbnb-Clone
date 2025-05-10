export type ExploreItems = {
  img: string;
  location: string;
  distance: string;
};
export type LiveItems = {
  img: string;
  title: string;
};

export type listingCardItems = {
  img: string,
  location: string,
  title: string,
  description: string,
  price: string,
  total: string,
  star: number,
  long: number,
  lat: number,
}


export type exploreData = ExploreItems[];
export type liveData = LiveItems[];
export type searchResultData = listingCardItems[];
