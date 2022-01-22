import React from 'react'

const NewsItems = (props)=> {
   
        
        return (
            <div className='my-3'>
            <div className="card">
            <div style={{display:'flex' , position: 'absolute' , justifyContent : 'flex-end' ,right : '0' }}>
            <span className="badge rounded-pill bg-danger" >
            {props.source}
            </span>
            </div>
            <img src={props.imgUrl } className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}    
          </h5>
              <p className="card-text">{props.desc}...</p>
              <a href={props.newsUrl} target="/blank" className="btn btn-danger md-1">Read More</a>
              <p className="card-text"><small className="text-muted">By {props.author ? props.author : "Unknown"} On {props.date} </small></p>
              
            </div>
          </div>
            </div>
        )
    
}

export default NewsItems
