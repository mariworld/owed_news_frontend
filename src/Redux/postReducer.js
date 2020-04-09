// let initialState = {
//   user: {
//     posts: []
//   },
//   all: []
// }
// import cuid from 'cuid';
  
let initialState = {
  allArticles: []
}

const postReducer = (state = initialState, action) => {

  switch (action.type) {
    //THIS IS MY CREATE
    case "ADD_POSTS":

      let copyOfArray = [...state.posts, action.payload]
      //action.payload should be the object of new article post
      return {
        ...state,
        // posts: copyOfArray
        allArticles: copyOfArray
      }


    case "SET_ALL_POSTS":
  
      return {
        ...state,
        // posts: action.payload.articles
        allArticles: action.payload
      }
      

    default:
      return state
  }
}

export default postReducer

// let initialState = {
//     posts: []
//   }
  
//   let postReducer = (state = initialState, action) => {
//     switch (action.type) {
  
//       case "SET_ALL_POSTS":
  
//       return {
//         ...state,
//         all: action.payload
//       }
  
//       default:
//         return state
//     }
//   }
  
  
//   export default postReducer