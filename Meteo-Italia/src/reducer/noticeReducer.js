function jsonResponse(action) {
  return fetch(action.url).then((res) => res.json());
}

export default function noticeReducer(state = [], action) {

  switch (action.type) {
    case "NOTIZIE":
       jsonResponse(action).then((res) => {
         if(state.length === 0){
           for (let i = 0; i < res.articles.length; i++) {
             state.push(res.articles[i]);
           }
         }
      });
      return state;

    default:
      return state;
  }
}
