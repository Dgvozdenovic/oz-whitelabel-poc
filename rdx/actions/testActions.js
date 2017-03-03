import axios from "axios";

export function setList() {
  return function(dispatch) {
      dispatch({type: "SET_LIST", payload: [1,2,3,4,5]});
    /*axios.get("http://local.scoopz.com/api/v1/important_info?entity_id=51")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
    })*/
  }
}

export function setString() {
  return function(dispatch) {
      dispatch({type: "SET_STRING", payload: "Heyyy"});
    /*axios.get("http://local.scoopz.com/api/v1/important_info?entity_id=51")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
    })*/
  }
}
