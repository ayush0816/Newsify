import React , {useEffect,useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
 




const News =(props)=> {
     
    const capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
   
    // document.title = `Newsify - ${capitalize( props.category)}`;
    const updateNews = async()=>{
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=00273428cb0f4f969a3209b7475996e8&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
         props.setProgress(30);
        let data =  await fetch(url);
        let parsedData = await data.json();
         props.setProgress(60);
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
         props.setProgress(100);
    }  

    useEffect(() => {   
       updateNews();  
       // eslint-disable-next-line
      },[])
    
      const fetchMoreData = async() => {
          const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=00273428cb0f4f969a3209b7475996e8&page=${page+1}&pageSize=${props.pageSize}`;
          setpage(page+1)
        
        let data =  await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        setloading(false)
        settotalResults(parsedData.totalResults)
      };
     
    
   
      
        return (
           <>
            <h1 className="text-center" style={{margin : '25px 25px' , marginTop:'90px'}}>Newsify - Top {capitalize( props.category)} Headlines  </h1>
             {loading && <Spinner/>}             
            
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!== totalResults}
                loader={<Spinner />}
                > 
                <div className="container"> 
                <div className="row"> 
                {articles.map((ele)=>{
                return <div className="col-md-4" key={ele.url}>
                <NewsItems title={ele.title} desc={ele.description?ele.description.slice(0,88):""} imgUrl={ele.urlToImage ? ele.urlToImage : 'https://images.indianexpress.com/2021/11/GettyImages-diabetes-1200.jpg'} newsUrl = {ele.url} author={ele.author} date={ele.publishedAt.slice(0,10)} source = {ele.source.name} />
                </div> 
              })}
              </div>
              </div>
              </InfiniteScroll>
              
            </>
        )

}

News.defaultProps = {
    country : 'in' ,
    pageSize : 6,
    category : 'sports'
}
News.propTypes = {
    pageSize : PropTypes.string,
    country : PropTypes.string,
    category : PropTypes.string,
}

export default News
