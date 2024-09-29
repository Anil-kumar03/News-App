import { useEffect, useState } from "react"
import NewsItem from "../components/NewsItem";

let articles=[]
const NewsBoard = (props) => {
    const {category}=props
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=265c02b744bd4bdf84a632beaa9de4bd`; //${import.meta.env.API_KEY}
        fetch(url).then(response =>response.json()).then(data=>setArticles(data.articles));
    },[category])
  return (
    <div>
        <h2 className="text-center mt-3" style={{fontSize:"40px"}}>Latest <span className="badge bg-danger">News</span></h2>
        {articles && articles.map((news)=>{
            return < NewsItem  title={news.title } description={news.description } src={news.urlToImage} url={news.url} />
        })}
       
    </div> 
  ) 
}

export default NewsBoard