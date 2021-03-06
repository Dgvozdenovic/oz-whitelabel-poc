import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    axios.get("http://local.scoopz.com/api/v1/important_info?entity_id=51")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
