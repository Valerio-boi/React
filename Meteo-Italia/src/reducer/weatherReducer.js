

export default  function weatherReducer(state = null, action) {
  switch (action.type) {
    case "WEATHER":
      
        state = action.payload;

      return state;
    default:
      return state;
  }
}
