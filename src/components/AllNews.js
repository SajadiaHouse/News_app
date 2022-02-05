import React,{useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



function AllNews(props) {

    const [page, setpage] = useState(1)
    const [data, setdata] = useState([]);
    const [totpage, settotpage] = useState(0);
    const [loading, setloading] = useState(true);

    const updatenews = async () => {
        props.setProgress(10);       
        let url = `https://newsapi.org/v2/top-headlines?category=${props.cate}&country=in&apiKey=f49408e6e1e346999a339f1e6c491502&page=${page}&pageSize=9`;
        setloading(true);
        let fdata = await fetch(url);
        props.setProgress(30);
        let parsedData = await fdata.json();
        props.setProgress(70);
        setloading(false);
        props.setProgress(100);
        settotpage(parsedData.totalResults);
        setdata(parsedData.articles);
        
    }
    useEffect(() => {
        updatenews();
    }, [])
    const fetchMoreData=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?category=${props.cate}&country=in&apiKey=f49408e6e1e346999a339f1e6c491502&page=${page}&pageSize=9`;
        let fdata = await fetch(url);
        let parsedData = await fdata.json();
        setdata(data.concat(parsedData.articles));
        setpage(page+1);
    }
    return (
        <>
         <h1 className="text-center">NewsMonky-</h1>
        {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={data.length !== totpage}
                    loader={<Spinner/>}
                >                  
           <div className="row">
                {!loading && data.map((e) => {
                    return <div className="col-4" key={e.url}>
                        <Newsitem imgUrl={e.urlToImage} date={e.publishedAt} author={e.author} url={e.url} desc={e.description} content={e.title} />
                    </div>
                })}
            </div>
        </InfiniteScroll>
        </>
    )
}

export default AllNews
