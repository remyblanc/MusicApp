export default function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state = state+1;

    default:
      return state;
  }
}