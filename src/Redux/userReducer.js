let userInitialState = {
  token: "",
  username: "",
  user_posts: []
  
}


const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': 
    return {
      ...state,
      // id: action.payload.id,
      username: action.payload.user.username,
      user_posts: action.payload.user.user_posts,
      token: action.payload.token
    }
    case 'SET_USER_INFORMATION':
      return {
        username: action.payload.username,
        user_posts: action.payload.user_posts,
        token: action.payload.token
      }
    case 'LOG_OUT':
      return userInitialState
  
    default:
      return state
  }
}


export default userReducer

// let initialState = {
//     username: "",
//     token: "",
//     posts: []
//     //will need posts
//   }
  
//   let userReducer = (state = initialState, action) => {
//     switch (action.type) {
  
//       case "SET_USER_INFORMATION":
//         return {
//           ...state,
//           username: action.payload.user.username,
//           token: action.payload.token
//         }
  
  
//       case "LOG_OUT":
//         return {
//           ...state,
//           ...initialState
//         }
  
//       default:
//         return state
//     }
//   }
  
  
//   export default userReducer

//   let initialState = {

// }

// let changeThisToBeWhateverYouWant = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }


// export default changeThisToBeWhateverYouWant

// // actionCreator

// export const actionCreatorName = (payloadThing) => {
//   return {
//     type: "ACTION_CREATOR_NAME",
//     payload: payloadThing
//   }
// }