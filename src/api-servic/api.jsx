import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPhotos = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "GfjsBL2Ub2XRkMBYV4g8G9RiIdmQKmzG4nTy5DOfNqQ",
      query,
      page,
      per_page: 12,
    },
  });
  return response.data.results;
};
