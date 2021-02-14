const istate = {
  memes: [],
  meme: {},
  error: "",
};

function reducer(meme = istate, action) {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...meme, memes: action.payload, error: "" };
    case "POST":
      return { ...meme, meme: action.payload, error: "" };
    case "ERROR":
      return { ...meme, error: action.payload };
    case "PATCH":
      return {
        memes: meme.memes.map((single) => {
          console.log(single.id, action.payload.id);
          return single.id == action.payload.id ? action.payload : single;
        }),
        meme: action.payload,
        error: "",
      };
    default:
      return meme;
  }
}

export default reducer;
