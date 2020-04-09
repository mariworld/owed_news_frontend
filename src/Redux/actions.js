import history from '../history';

export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
          alert("try again")
        } else {
          localStorage.setItem("token", data.token)
          dispatch(setUserInformation(data.user))
          //this user has no history so the push to profile isn't showing up
          history.push("/")
        }
      })
  }
}

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
          alert("try again")
        } else {
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
          // history.push("/profile")
        }
      })
  }
}

export const loginUser = userObj => (
  console.log('this is logging in the user', localStorage),
  {
    type: 'LOGIN_USER',
    payload: userObj
}

)

  
  
  export const setUserInformation = (responseFromFetch) => {
    console.log(responseFromFetch);
    //this repsonse from the fetch needs to trigger the app.js function
    return {
      type: "SET_USER_INFORMATION",
      payload: responseFromFetch
      
    }
  }

  export const addPostToUser = (props) => {
    console.log(props)
    //fetch will go here
  }

  export const userPostData = (postObj) => {
    return {
      type: "ADD_POST_TO_USER",
      payload: postObj
    }
  }
  
  export const logOut = () => {
    return {
      type: "LOG_OUT"
    }
  }