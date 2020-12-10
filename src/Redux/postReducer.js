 let initialState = {
  allArticles: []
}

const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_POSTS":

      let copyOfArray = [...state.posts, action.payload]

      return {
        ...state,
        allArticles: copyOfArray
      }


    case "SET_ALL_POSTS":
  
      return {
        ...state,
        allArticles: action.payload
      }
      

    default:
      return state
  }
}

export default postReducer
