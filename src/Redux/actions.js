import history from '../history';

export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
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
          dispatch(loginUser(data.user))
          //this user has no history so the push to profile isn't showing up
          history.push("/")
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

export const persistUser = () => {
  return dispatch => {
  if (localStorage.token) {
    fetch("http://localhost:3000/persist", {
      headers: {
        "Authorization": `bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then((resp) => {
      // console.log('is user here?',resp)
      dispatch(loginUser(resp.user))
      // this.props.history.push("/profile")

    })
    }
  }
}

export const fetchAndSetUserPosts = () => {
  return dispatch => {
    return fetch("http://localhost:3000/user_posts")
    .then(r => r.json())
    .then(posts => {
      dispatch(setAllUserPosts(posts))
    })
  }
}

export const setAllUserPosts = (articlesArray) => {
  return {
    type: "SET_ALL_USER_POSTS",
    payload: articlesArray
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
          // console.log(data.user)
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
          history.push("/profile")
        }
      })
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            // console.log("profile fetch", data.user)
            dispatch(loginUser(data.user))
          }
        })
    }
  }
}



  
  
  export const setUserInformation = (responseFromFetch) => {
    console.log(responseFromFetch);
    //this repsonse from the fetch needs to trigger the app.js function
    return {
      type: "SET_USER_INFORMATION",
      payload: responseFromFetch
      
    }
  }

  export const addPostToUser = (articleObj) => {
    //right now it's just posting to posts
    // I need to create a custom route for the user posts
    return (dispatch) => {
      return fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${localStorage.token}`,
            'Content-type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(
            {
              title: articleObj.title,
              content_url: articleObj.url,
              description: articleObj.description,
              url_image: articleObj.urlToImage,
              content_body: articleObj.content  
            })
          })
          .then(r => r.json())
          .then(articleData => {
            dispatch(userPostData(articleData))
            alert('This article has been added to your news bank!')
          })
        
      }
    }  

  export const userPostData = (postObj) => {
    return {
      type: "ADD_POST_TO_USER",
      payload: postObj
    }
  }

  //we need a fucntion that posts/persists to the database and reads from the database
  //update the state and database of user_posts with a fetch
  
  export const logOut = () => {
    return {
      type: "LOG_OUT"
    }
  }

  export const deletePostFromUser = (id) => {
    console.log(id)
    return (dispatch) => {
        return fetch(`http://localhost:3000/user_posts/${id}`, {
            method: 'DELETE',
             headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${localStorage.token}`
            }
        })
        .then(resp => resp.json(console.log))
        .then(dataResp => {
          
            // console.log(dataResp)
            dispatch(deletedPost(id))
            alert('This article has been deleted from your news bank!')
            history.push("/profile")
            
        })
}
}
export const deletedPost = (id) => {
     return {
     type: "DELETE_POST_FROM_USER",
     payload: id
 }
}