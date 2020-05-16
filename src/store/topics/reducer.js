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
    case types.TOPICS_SELECTED:
      return state.merge({
        selectedTopicsUrls: action.selectedTopicsUrls,
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

export function getSelectedTopicUrls(state) {
  return state.topics.selectedTopicsUrls;
}

export function getSelectedTopicUrlsMap(state) {
  return _.keyBy(state.topics.selectedTopicsUrls);
}
