import Immutable from "seamless-immutable";

const initialState = Immutable({
  postsById: undefined,
  currentFilter: "",
  currentPostId: undefined,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
