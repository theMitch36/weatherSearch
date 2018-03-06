import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
    //   the 2 return lines below do the same thing
    //   return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
    }
    return state;
}