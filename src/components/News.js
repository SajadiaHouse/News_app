import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem.js';
import Spinner from './Spinner.js';
function News(props) {

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
    const prevHandle = () => {
        setpage(page - 1);
        updatenews();
    }
    const nextHandle = () => {
        if(page+1> Math.ceil(totpage/9)){

        }
        else{
             setpage(page + 1);
        updatenews();
        }
       
    }

    return (
        <div className="container" style={{ marginTop: "70px" }}>
            <h1 className="text-center my-3">News Application</h1>
            {loading && <Spinner />}

            <div className="row">
                {!loading && data.map((e) => {
                    return <div className="col-4" key={e.url}>
                        <Newsitem imgUrl={e.urlToImage} date={e.publishedAt} author={e.author} url={e.url} desc={e.description} content={e.title} />
                    </div>

                })}

            </div>
            <div className="d-flex justify-content-between">
                <button disabled={page <= 1} className="btn btn-dark" onClick={prevHandle}>&larr; Prev</button>
                <button disabled={page+1 > Math.ceil(totpage/10)} className="btn btn-dark" onClick={nextHandle}>Next &rarr;</button>
            </div>

        </div>
    )
}

export default News
