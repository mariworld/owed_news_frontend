
export const fetchAndSetAllPosts = () => {
    return (dispatch) => {
      // fetch(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.REACT_APP_GOOGLE_API_KEY}`)
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      fetch('http://localhost:3000/news')
      .then(r => r.json())
      .then((posts) => {
        dispatch(setAllPosts(posts.articles))
        console.log(posts)
        // posts.articles.forEach(article => {
        })
        
        //need to fix this later that but put a post fecth below
        
        
      }
    }
    
    
    
    export const addPost = (articleObj) => {
      return dispatch => {
      return fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(
            {
              title: articleObj.title,
              content_url: articleObj.url,
              description: articleObj.description,
              url_image: articleObj.urlToImage,
              content_body: articleObj.content  
            }
          )
          .then(r => r.json())
          .then(articleData => {
            dispatch(addedArticleObject(articleData))
          })
        })
      }
    }  
  
   export const addedArticleObject = (articleObj) => {
      return { 
        type: "ADD_POST",
        payload: articleObj
    }

  }
  
  export const setAllPosts = (articlesArray) => {
    return {
      type: "SET_ALL_POSTS",
      payload: articlesArray
    }
    
  }
