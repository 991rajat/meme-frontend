import axios from "axios";

const url = "http://localhost:5000/memes";

//Action Creators
export const getMemes = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
