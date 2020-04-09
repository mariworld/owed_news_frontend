import React from 'react'

const PublicCard = (props) => {
 

    const handleClick = () => {
        console.log(props.article)
    }


    let {title, url, urlToImage } = props.article
    return (
        <React.Fragment>
        <div>
            <div>
            <a href={url}>  
            <div className="card"> 
                <img src={urlToImage} alt="Avatar" style={{maxWidth:"100%", maxHeight:"100%"}}/>
                <div className="container">
                    <h4><b>{title}</b></h4>
                    <p></p>
                   
                </div>
            </div>
            </a>
        </div>
                <button onClick={handleClick}>Add to Your News Bank</button>
        </div>
        </React.Fragment>
    )
}

export default PublicCard
