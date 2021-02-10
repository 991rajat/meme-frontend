function reducer(meme = [], action) {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "POST":
      return [...meme, action.payload];
    default:
      return meme;
  }
}

export default reducer;
