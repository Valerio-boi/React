export default function changeTheme(state = false, action) {
  switch (action.type) {
    case "DARK":
      state = true;
      return state;
    case "LIGHT":
      state = false;
      return state;
    default:
      return state;
  }
}
