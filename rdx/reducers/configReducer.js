export default function reducer(state={
    configuration: {}
  }, action) {

    switch (action.type) {
      case "SET_CONFIG": {
        return {
          ...state,
          configuration: action.payload
        }
    }
    }

    return state;
}
