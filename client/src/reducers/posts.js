export default (posts = [], action) => {
  // remember posts is a state from our funciton (state, action)=>{...}
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
