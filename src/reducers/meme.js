function reducer(meme = [], action) {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "POST":
      return meme;
    default:
      return meme;
  }
}

export default reducer;
