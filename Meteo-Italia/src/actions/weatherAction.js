export default function weatherAction(payload) {
  return {
    type: "WEATHER",
    payload: payload,
  };
}
