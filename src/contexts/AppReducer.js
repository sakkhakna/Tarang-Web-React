const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    case "SET_SINGLE_VENUE":
      return {
        ...state, 
        singleVenue: action.payload,
      }
    default:
      return state;
  }
};

export default AppReducer;
