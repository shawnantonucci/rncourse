import {
  ADD_PLACE,
  DELETE_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: `${Date.now()}`,
          name: action.placeName,
          image: {
            uri:
              "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
          }
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };

    default:
      return state;
  }
};

export default reducer;
