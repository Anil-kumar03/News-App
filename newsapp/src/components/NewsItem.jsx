
const NewsItem = (props) => {
    const {title,description,src,url}=props
  return (
    
    <div className="card bg-dark text-light mb-3 d-inline-block my-1 mx-1 px-2 py-2 " style={{maxWidth:"480px"}}>
    <img src={src?src:'https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg'} style={{height:"200px", width:"440px"}} className="card-img-top" alt="newsimage" />
    <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0.60):" News Updates: Get Latest Breaking News, Photos and Video News on Text Messages. Also find Text Messages latest news headlines, picture gallery ..."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
    </div>

</div>
  )
}

export default NewsItem