import Immutable from "seamless-immutable";
import _ from "lodash";
import * as types from "./actionTypes";

const initialState = Immutable({
  topicsByUrl: undefined,
  selectedTopicsUrls: [],
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOPICS_FETCHED:
      return state.merge({
        topicsByUrl: action.topicsByUrl,
      });
    default:
      return state;
  }
}

export function getTopicsByUrl(state) {
  return state.topics.topicsByUrl;
}

export function getTopicsUrlArray(state) {
  return _.keys(state.topics.topicsByUrl);
}
