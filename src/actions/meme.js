import axios from "axios";

//const url = "http://localhost:8081/memes";
const url = "https://safe-oasis-68429.herokuapp.com/memes";
//Action Creators

// METHOD GET  @get
export const getMemes = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    //console.log(error);
  }
};

// METHOD POST  @post
export const postMeme = (meme) => async (dispatch) => {
  try {
    const { data } = await axios.post(url, meme);
    //console.log(data);
    dispatch({ type: "POST", payload: data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data.message });
    //console.log(error.response.data.error);
  }
};

// METHOD PATCH  @patch
export const patchMeme = (meme, id) => async (dispatch) => {
  try {
    //console.log(url + "/" + id);
    const { data } = await axios.patch(url + "/" + id, {
      caption: meme.caption,
      url: meme.url,
    });
    //console.log(data);
    dispatch({ type: "PATCH", payload: data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data.message });
    //console.log(error.response.data.error);
  }
};
