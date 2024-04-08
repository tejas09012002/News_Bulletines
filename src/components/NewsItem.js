import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1" }}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={imageUrl ? imageUrl : "https://cdn.pixabay.com/photo/2022/11/01/11/27/breaking-news-7562017_960_720.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-md btn-dark">Read More &rarr;</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem