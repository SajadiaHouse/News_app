import React from 'react'

function Newsitem(props) {
let {desc, imgUrl, url, content,author,date}= props;


    return (
      
            <div className="card my-2" style={{width: "22rem", height :"30rem"}} >
                <img src={!imgUrl? "https://images.app.goo.gl/UstCHJpz8hV9USp46": imgUrl} className="card-img-top" alt="..." style={{height: "200px"}} />
                <div className="card-body">
                    <h5 className="card-title">{content}</h5>
                    <p className="card-text">{(desc===null)? "" :desc.slice(0,120)}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark float-end">Go Summary</a>
                </div>
            </div>
       
    )
}

export default Newsitem
