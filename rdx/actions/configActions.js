import axios from "axios";

export function setConfig(instance) {
    if (!instance) instance = 1;
    return function(dispatch) {
        axios.get(`http://localhost:3004/instances/${instance}`)
        .then((response) => {
                dispatch({type: "SET_CONFIG", payload: response.data});
        });
  }
}
