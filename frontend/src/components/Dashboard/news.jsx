import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import loading from '../../assets/loading.json'
const News = () => {
  const [newsArr, setNewsArr] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?continent=asia&category=business&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
    const getNews = async () => {
      try {
        setIsLoading (true)
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          const length = result.articles.length;
          const article = []
          for (let index = 0; index < length; index++) {
            article.push({
              title: result.articles[index].title,
              url: result.articles[index].url
            })
          }
          setNewsArr(article); // Update state
             setIsLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    };
    getNews();
  }, []);

  return (
    <>
    <div className='h-100 w-150 flex gap-5 flex-col rounded-3xl justify-center items-center shadow-2xl border-[1px] border-zinc-300 scroll-x-0' >
      
        {isLoading?<Lottie animationData={loading} loop={true} style={{width:200 ,height:400}}/>:<div className='h-100 w-150 flex gap-5 flex-col rounded-3xl items-center overflow-auto shadow-2xl border-[1px] border-zinc-300'>
      <div className="w-full sticky top-0 flex flex-col items-center z-10">
        <div className="heading bg-black text-white w-full  overflow-hidden">
          <h1 className='font-bold text-3xl text-center p-3'>
            Top Business News Around World.
          </h1>
        </div>
      </div>
      <div className="news h-100 w-100">
        <div className="newsBody mt-15 ">

          {newsArr.map((item, idx) => (
            <div key={idx} className="rounded-xl p-2 bg-white border-red-300 font-bold text-zinc-600 hover:bg-zinc-300">
              {idx + 1} . {item.title}
              <div className='p-2 text-black'>
                <a href={item.url} className="underline-none text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  {item.url}
                </a>
              </div>
              <div className='w-full h-[1px] bg-zinc-500 opacity-60'></div>
            </div>
          ))}

        </div>
      </div>
    </div>}
    </div>
    </>

  );
}

export default News;
