import axios from "axios";
const BASEURL = `https://www.googleapis.com/books/v1/`;
const apiCall = async ({ method = "GET", endpoint = "", params = {} }) => {
  try {
    const { data: res } = await axios({
      url: `${BASEURL}${endpoint}`,
      method,
      params: {
        key: `AIzaSyBZe0VEYz-43jNZV4cI7a5HoG_k0kFwoxA`,
        ...(params || {}),
      },
    });
    return res;
  } catch (error) {
    console.log("===============ERROR=====================");
    console.log(error);
    console.log("===============ERROR++===================");
  }
};

export { apiCall };
