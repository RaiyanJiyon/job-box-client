import React, { useEffect, useState } from 'react';
import SectionTitle from '../../common/SectionTitle';
import { Link } from 'react-router-dom';

const NewsAndBlog = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/news.json');
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchNews();
    }, []);

    return (
        <div>
            <SectionTitle title="News and Blog" description="Get the latest news, updates and tips" />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 max-w-screen-2xl mx-auto mt-14'>
                {
                    news.map((news, idx) => (
                        <div key={idx} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm px-3 pt-3">
                            <Link className=''>
                                <img className="rounded-lg" src={`${news.image}`} alt={`${news.title} image`} />
                            </Link>
                            <button type="button" class="my-5 px-3 py-1 text-xs font-medium text-center text-blue-400 hover:text-black bg-[#e0e6f7] rounded-md hover:bg-[#e0e6f1]">{news.category}</button>
                            <div className="">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                        {news.title}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">
                                    {news.description}
                                </p>

                                <div class="py-3 sm:py-4">
                                    <div class="flex items-center">
                                        <div class="shrink-0">
                                            <img src={`${news.author.photoUrl}`} alt={`${news.author.name} image`} />
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {news.author.name}
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {news.postedDate}
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {news.timeToRead}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default NewsAndBlog;
