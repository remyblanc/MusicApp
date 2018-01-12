export default function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state = state+action.amount;

    default:
      return state;
  }
}