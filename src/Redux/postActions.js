
export const fetchAndSetAllPosts = () => {
    return (dispatch) => {
      fetch(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.REACT_APP_GOOGLE_API_KEY}`)
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(r => r.json())
      .then((posts) => {
        dispatch(setAllPosts(posts.articles))
        console.log(posts)
        // posts.articles.forEach(article => {
        })
        
        //need to fix this later that but put a post fecth below
        
        
      }
    }
    
    
    
    export const addPost = (postObject) => {
      //   fetch("http://localhost:3000/posts", {
      //     method: "POST",
      //     headers: {
      //       'Content-type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      //     body: JSON.stringify(
      //       {
      //         title: article.title,
      //         content_url: article.url,
      //         description: article.description,
      //         url_image: article.urlToImage,
      //         content_body: article.content  
      //     }
      //     )
      //   })
      // })
  
    let actionObject = {
      type: "ADD_POST",
      payload: postObject
    }
  
    return actionObject
  
  }
  
  export const setAllPosts = (articlesArray) => {
    return {
      type: "SET_ALL_POSTS",
      payload: articlesArray
    }
    
  }
