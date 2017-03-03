export default function reducer(state={
    testList: [],
    testString: "Initial state"
  }, action) {

    switch (action.type) {
      case "SET_LIST": {
        return {
          ...state,
          testList: action.payload
        }
        }
        case "SET_STRING": {
          return {
            ...state,
            testString: action.payload
          }
        }
    }

    return state;
}
