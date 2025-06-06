export const getExplore = async () => {
  try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
  const exploreData = await res.json();
  return exploreData;
  } catch (error) {
  console.log(error);
  }
  };

export const getLive = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const liveData = await res.json();
    return liveData;
  } catch (error) {
    console.log(error);
  }
};

// export const getSearchResult = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
//     const searchResultData = await res.json();

//     if (Array.isArray(searchResultData) && searchResultData.length > 1) {
//       searchResultData[1].img = "/private.png";
//     }

//     return searchResultData;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const getSearchResult = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchResultData = await res.json();

    if (Array.isArray(searchResultData) && searchResultData.length > 1) {
      searchResultData[1].img = "/private.png";
    }

    return searchResultData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
